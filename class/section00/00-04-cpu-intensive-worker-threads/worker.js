const { parentPort } = require("worker_threads");

parentPort.on("message", (maxSize) => {
  let sum = 0;
  for (let i = 0; i < maxSize; i++) {
    sum += i;
  }
  parentPort.postMessage(sum);
  parentPort.close();
});
