// 휴대폰 인증 토큰 전송API를 요청해주세요.
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const phone1 = document.getElementById('PhoneNumber01').value;    
  const phone2 = document.getElementById('PhoneNumber02').value;
  const phone3 = document.getElementById('PhoneNumber03').value;

  const phone = phone1 + phone2 + phone3;

  
  axios.post('http://localhost:4000/tokens/phone', {
      phone,
  }).then((res) => {
      console.log(res.data);
  });
  console.log('인증 번호 전송')
}
// 핸드폰 인증 완료 API를 요청해주세요.
const submitToken = async () => {
  const phone1 = document.getElementById('PhoneNumber01').value;    
  const phone2 = document.getElementById('PhoneNumber02').value;
  const phone3 = document.getElementById('PhoneNumber03').value;

  const phone = phone1 + phone2 + phone3;
  const token = document.getElementById('TokenInput').value;
  
  axios.patch('http://localhost:4000/tokens/phone',{
    token,phone
  }).then((res) => {
    console.log(res.data);
  }).catch((res) => {
    console.log(res.data);
    
  })
};

// 회원 가입 API를 요청해주세요.
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value
  const personal1 = document.getElementById("SignupPersonal1").value
  const personal2 = document.getElementById("SignupPersonal2").value
  const phone01 = document.getElementById("PhoneNumber01").value
  const phone02 = document.getElementById("PhoneNumber02").value
  const phone03 = document.getElementById("PhoneNumber03").value
  const prefer = document.getElementById("SignupPrefer").value
  const email = document.getElementById("SignupEmail").value
  const password = document.getElementById("SignupPwd").value
  
  const phone = phone01 + phone02 + phone03
  const personal = personal1 + personal2
  console.log(name,
    personal,
    phone,
    prefer,
    email,
    password);

  axios.post("http://localhost:4000/users",{
    name,
    personal,
    phone,
    prefer,
    email,
    password
  }).then((res) => {
    console.log(res.data);
  })

  
  
  console.log("회원 가입 완료");
};
