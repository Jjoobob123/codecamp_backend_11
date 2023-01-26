/**
 * @swagger
 * /Users:
 *   get:
 *     summary: 유저 목록 가져오기
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: 유저 목록
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 63d0f138ea9228b5edf0091d
 *                 name:
 *                   type: string
 *                   example: 어벤져스
 *                 email:
 *                   type: string
 *                   example: ala@gamil.com
 *                 personal:
 *                   type: string
 *                   example: 220101-*******
 *                 prefer:
 *                   type: string
 *                   example: https://naver.com
 *                 pwd:
 *                   type: string
 *                   example: 1234
 *                 phone:
 *                   type: string
 *                   example: "01072777121"
 *                 og:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: Daum
 *                     description:
 *                       type: string
 *                       example: 이용자 선택권을 강화한 뉴스, 세상의 모든 정보를 연결하는 검색. Daum에서 나의 관심 콘텐츠를 즐겨보세요
 *                     image:
 *                       type: string
 *                       example: https://i1.daumcdn.net/svc/image/U03/common_icon/5587C4E4012FCD0001
 */


/**
 * @swagger
 * /Users:
 *   post:
 *     summary: 유저 등록하기
 *     tags: [Users]
 *     requestBody:
 *       description: 위 내용을 입력해주세요!!!
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 어벤져스
 *               email:
 *                 type: string
 *                 example: ala@gamil.com
 *               personal:
 *                 type: string
 *                 example: 220101-*******
 *               prefer:
 *                 type: string
 *                 example: https://naver.com
 *               pwd:
 *                 type: string
 *                 example: 1234
 *               phone:
 *                 type: string
 *                 example: "01072777121"
 *     responses:
 *       200:
 *         description: 등록 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 63d0f138ea9228b5edf0091d
 *       422:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 에러!! 핸드폰 번호가 인증되지 않았습니다.         
 */