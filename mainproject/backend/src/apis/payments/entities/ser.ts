// import { UnauthorizedException } from "@nestjs/common"

// verify({ accessToken, refreshToekn}){
//     try{
//         const decodeAccess = jwt.verify(accessToken,
//             process.env.JWT_ACCESS_KEY)

//         const decodeRefresh = jwt.verify(refreshToken,
//             process.env.JWT_REFRESH_KEY)

//         return ({decodeAccess,decodeRefresh})
//     }catch(e){
//         throw new UnauthorizedException('검증이 안된 인증번호입니다!')
//     }
// }

// async logout({req, res}){

//     // 0. 토큰만을 받아 올 수 있게 잘라준다.
//     const accessToken = req.headers['accessToken'].replace(
//         // 'Bearer ',
//         '',
//     )
//     const refreshToken = await context.req.headers['cookie'].split(
//         'refreshToken=',
//       )[1];
//       const refresh_Token = await refreshToken.split(' path=')[0];

//     // 1. 검증된 인증번호 인지 확인 . verify 을 바깥으로 빼준다.
//     const ({decodeAccess,decodeRefresh}) = this.verify({
//         accessToken, refreshToken
//     })
//     // 2. 레디스에 넣을때 , TTl을 넣어줘서 만료기간을 지정해주자.
//     await this.cacheManager.set(`accessToken:${accessToken}`, 'accessToken', {
//         ttl: jwtAccessKey['exp'] - jwtAccessKey['iat'],
//       });

//       await this.cacheManager.set(
//         `refresh_Token:${refresh_Token}`,
//         'refresh_Token',
//         {
//           ttl: jwtRefreshKey['exp'] - jwtRefreshKey['iat'],
//         },
//       );

//       // res는 어디에 쓰지...
//       return '로그아웃 만료'
//     // strategy에 다시 레디스에 토큰이 저장되어있는지 확인해준다.
// }
