const { Storage } = require("@google-cloud/storage"); // ==> 파일 모듈을 가져와서 입력 출력 스트리밍이 가능하다.
const sharp = require("sharp");

// 파일 업로드를 할 경우 event를 작동시킬 트리거 만들어주기
exports.ThumbnailTrigger = async (event, context) => {
  // 만약 name를 thumb를 안찾고 내비뒀을 경우 무한루트로 thumb라는 폴더와 파일을 만든다.
  // 이러한 현상을 막아주기 위해 if문으로 찾아주면 return 문으로 종료한다.
  if (event.name.includes("thumb/")) return;

  //fetchprodcut.png => 앞에 이름은 내 사진 이름으로 나온다 이것을 const로 담는다.
  const fileName = event.name;

  // 이벤트를 콘솔로 찍으면 bucket:'codecamp-storages', 이벤트는 지정한 버킷에 저장하는 걸 알수 있다.
  // 여기서 버킷에 변수를 담아서 하면 프로미스를 쓸때 나중에 버킷을 안써도 된다.
  // 이건 이따가 설명!
  const storage = new Storage().bucket(event.bucket);

  // 사이즈 지정을 위한 배열을 담는다.
  // map메서드는 객체로 사용할 수 없기에 배열로 담아서 실행해준다.
  // 그리고 폴더를 나눠줘야 하기 때문에 key-value 로 나눠준다.
  const sizes = [
    { image: 320, values: "s" },
    { image: 640, values: "m" },
    { image: 1280, values: "l" },
  ];

  // 1단계
  // stream => 스트림은 시간이 지남에 따라 사용할 수 있게 되는 일련의 데이터 요소라고 한다.
  // 즉, 순차적인 데이터이다.크기 중요치 않고 흘러가 듯이 데이터를 보내준다. 그 이유는 메모리를 아끼기 위해서다.

  await new Promise((resolve, reject) => {
    storage
      .file(fileName) // => 읽을 파일을 찾아준다.
      .createReadStream() // => 읽기 가능한 스트림은 소비할 수 있는 데이터를 추상화 한것.(읽을 준비가 됨)
      .pipe(sharp().resize({ width: 320 })) // pipe => 목적지를 알려줄테니 알아서 데이터를 보내줘
      // sharp => 이미지 크기 변경해줘~
      // resize => 이미지 크기 지정 (?)
      .pipe(storage.file(`thumb/s/${fileName}`).createWriteStream()) // => `thumb/s/${fileName}`에 저장해줘
      .on("finish", () => resolve("성공")) // on => 스트림에서 데이터를 읽을 준비가 되어 있으니,데이터를 언제든지 읽어서 원하는대로 사용해라~
      .on("error", () => reject("실패"));
  });

  // 3개를 promise.all 로 묶어준다.(병렬처리)
  // 각각 사이즈를 지정해주기 위해서 size에 메서드 map 를 돌려준다.

  return await Promise.all(
    sizes.map(
      // 1. map 메서드를 사용해서 사이즈에 담긴 객체를 한번씩 나열해준다.
      (el) =>
        new Promise((resolve, reject) => {
          storage
            .file(fileName) // 이부분은 온전한 event.name 로 들어와야 한다.
            .createReadStream() // 왠만한 순서는 read >> write 스트림이고 중간에 연결되는 pipe 이벤트를 써준다.
            .pipe(sharp().resize({ width: el.image }))
            .pipe(
              storage
                .file(`thumb/${el.values}/${event.name.replace("origin/", "")}`) // => 원본 파일도 업로드 해주기 위해서 origin를 뒤를 반환해준다. //
                .createWriteStream() // 여기서 해주는 이유 const filename = 에다가 replace를 하게 되면 //
            ) // event.name 의 원본을 불러오지 못하고 값을 참조 못한다. 그러므로 //
            .on("finish", () => resolve("성공")) // 나눠주는것은 Promise 스코프 안에서 나눠준다. //
            .on("error", () => reject("실패")); // file.service도 나눠줘서 더해준다. //
        })
    )
  );
};
