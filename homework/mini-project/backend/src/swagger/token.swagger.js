/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 휴대폰 번호 입력하기
 *     tags: [tokenPhone]
 *     requestBody:
 *       description: 위 내용을 입력해주세요!!!
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "01072777121"
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:          
 *                 phone:
 *                   type: string
 *                   example: "01072777121"
 */


/**
 * @swagger
 * /tokens/phone:
 *   patch:
 *     summary: 인증번호 전송(성공😀  실패😭)
 *     tags: [tokenPhone]
 *     requestBody:
 *       description: 위 내용을 입력해주세요!!!
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "01072777121"  
 *               token:
 *                 type: string
 *                 example: "209098"
 *     responses:
 *       200:
 *         description: 성공!!!😀
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 true:
 *                   type: string
 *                   example: 인증번호 전송에 성공하셨습니다!!
 *       422:
 *         description: 실패!!!😭
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 false:
 *                   type: string
 *                   example: 인증번호가 일치하지 않습니다!!
 */