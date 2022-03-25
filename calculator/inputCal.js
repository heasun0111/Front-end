//const cal = require("./Calculator2.js");
//import { postfix, calPostfix } from "./Calculator2.js";
const cal = require("./Calculator.js");

//입출력
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let result = cal.calPostfix(cal.postfix(line));
  if (line.length < 201) {
    console.log("result:", result);
  } else {
    console.log("다시 입력하시오.");
  }
  //rl.close();
}).on("close", function () {
  process.exit();
});
