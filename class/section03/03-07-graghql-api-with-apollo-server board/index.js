import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    input createBoardInput {
        writer: String
        title: String
        contents: String
    }




    type MyResult {
        number: Int
        writer: String
        title: String
        contents: String
    }


    type Query {
        fetchBoards: [MyResult] #배열 안에 객체 1개이상을 의미!
        # fetchBoards: [MyResult] #객체 1개를 의미!
    }

    type Mutation {
        # createBoard:(writer: String, title: String, contents: String ) String
        createBoard(createBoardInput: createBoardInput!): String
    }
`

const resolvers = {
    Query:{
        fetchBoards: (parent, args, context, info) => {
            // 1.DB에 접속후, 데이터를 조회 => 데이터베이스 조회했다고 가정.
            const result = [
                { number: 1, writer: "cho", title: "제목입니다", contents: "내용이에요!" },
                { number: 2, writer: "jo", title: "바보입니다", contents: "바보에요!" },
                { number: 3, writer: "hyun", title: "주현입니다", contents: "주현이에요!" }
            ];

  // 2.DB에서 꺼내온 결과를 브라우저에 응답(response) 주기 
            return result
        }
    },

    Mutation: {
        createBoard: (_, args) => {
        // info: graphql 기타 정보들 
        // args: 브라우저에서 백엔드 요청할때 
        // parent :  백엔드에서 백엔드 요청할때 
        // context : 요청 , 응답
        // 사용하지 않는 것은 _, 사용
            // 1. 브라우저에서 보내준 데이터 확인하기
            console.log(args.createBoardInput.writer);
            console.log(args.createBoardInput.title);
            console.log(args.createBoardInput.contents);

            // 2. DB에 접속 후 , 데이터를 저장 => 데이터 저장했다고 가정.
  
            // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기

            return "게시물 등록에 성공하였습니다."
        },

        // 과제 )아래 API가 작동되도록 만들기 [힌트: 1)phone.js 2)req/res 관련부분 수정 3) 타입 작성하기 ]
        // createTokenOfPhone: () => {
        //     const myphone = req.body.qqq
        //     // 1. 휴대폰 번호 자릿수 맞는지 확인하기 (10~11자리)
        //     const isValid = checkPhone(myphone)
        //     if(isValid ===  false){
        //     return
        //     }

        //     // 2. 휴대폰 인증번호 6자리 생성
        //     const mytoken = getToken()

        //     // 3. 번호에 인증번호(토큰) 전송하기
        //     sendTokenToSMS(myphone, mytoken)

        //     res.send("인증완료")
        //     }

        }
}

const server = new ApolloServer ({
    typeDefs,
    resolvers,   //shortand 프로퍼티 적용 
    cors : true                                                 // 모든 사이트 허용하고 싶을 때
    // cors: {origin : ["http://naver.com", "http://daum.noet"]} //특정 사이트만 지정하고 싶을 때
})

startStandaloneServer(server) //4000