/**
 * @swagger
 * /tokens/Phone:
 *   post:
 *     summary: 휴대폰 번호 입력하기
 *     tags: [tokenPhone]
 *     parameters:
 *       - in: query
 *         name: PhoneNumber
 *         type: int
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
 * /tokens/Phone:
 *   patch:
 *     summary: 인증번호 전송(성공😀  실패😭)
 *     tags: [tokenPhone]
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