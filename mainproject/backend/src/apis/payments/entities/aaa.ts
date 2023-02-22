// import { UseGuards } from "@nestjs/common";
// import { Args, Context, Mutation } from "@nestjs/graphql";
// import { GqlAuthGuard } from "src/apis/auth/guards/gql-auth.guards";
// import { IContext } from "src/commons/interfaces/context";

// ====

// // @Resolver()
// // export class AuthResolver {
// //   constructor(
// //     private readonly authService: AuthService, //

// //     @Inject(CACHE_MANAGER)
// //     private readonly cacheManager: Cache,
// //   ) {}

// //   @Mutation(() => string)
// //   login(
// //     @Args('email') email :string,//
// //     @Args('password') password : string,
// //     @Context() context : IContext
// //   ): Promise<string>{
// //     return this.authService.login({email,password,res:context.res})
// //   }
// //   @UseGuards(GqlAuthGuard('refresh'))
// //   @Mutation(() =>  string)
// //   restoreAccessToken(
// //     @Context() context: IContext, //
// //   ) :string{
// //     return this.authService.restoreAccessToken.({user: context.req.user})
// //   }

// //   @UseGuards()
// //   @Mutation(() => string)
// //   // logout 함수는 context를 매개변수로 받아, 그안에 있는 req에서 accessToken과
// //   // refreshToken 을 꺼냅니다.
// //   async logout(
// //     @Context() context : IContext
// //   ){
// //     try{
// //         console.log(context.req);
// //         const accessToken = await context.req.headers['authorization'].replace(
// //             'Bearer ',
// //             '',
// //         )
// //         // 콘솔을 찍어본 결과 토큰 뒤에 경로표시인 path=/가 붙여 나온다 왜그러는건지 몰라서 일단은
// //         // 하드코딩(?) 으로 재할당해서 없애줬다.
// //         const refreshToken = await context.req.headers['cookie'].replace(
// //             'refreshToken=',
// //             '',
// //         )

// //         const refresh_Token = await refreshToken.split(' path=/')[0]

// //         // 토큰 유효성을 확인 할수 있게 verify 함수 사용
// //         const jwtAccessKey = jwt.verify(accessToken,'Myaccesskey')

// //         const jwtRefreshKey = jwt.verify(refresh_Token, 'Myrefreshkey')

// //     }catch(){

// //     }
// //   }
// // }

// @UseGuards()
// @Mutation(() => string)
// logout(@Args() context : IContext){
//     return this.authService.logout({req: context.req , res: context.res})
// }
