import express from "express";
const app = express();

// 주식 가격 조회
app.get("/stocks", (req, res) => {
  res.send("주식 가격을 조회 합니다.");
});
// 주식 최대가격 조회
app.get("/stocks/max", () => {
  res.send("주식최대 가격을 조회 합니다.");
});
// 신규 주식 등록
app.post("/stocks", () => {
  res.send("신규 주식 등록 합니다.");
});

app.listen(3002);
