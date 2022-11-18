const readline = require("readlline");

const lineDetail = readline.createInterface({
  input: Process.stdin,
  output: Process.stdout,
});

lineDetail.question(`Please provide your name -`, (name) => {
  console.log(`Hi ${name}!`);
  lineDetail.close();
});
