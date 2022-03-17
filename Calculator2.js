function operPrec(oper) {
  if (oper === "*" || oper === "/") return 2;
  else if (oper === "+" || oper === "-") return 1;
  return -1;
}
//연산자 우선순위 비교
function checkPrec(oper1, oper2) {
  return operPrec(oper1) >= operPrec(oper2);
}

//후위표기법
function postfix(exp) {
  let op = [];
  let num = [];
  let tok;
  //정규표현식 이용해서 배열로 반환
  exp = exp.match(/[\d\.]+|[^\d\.]/g).reverse();
  while ((tok = exp.pop())) {
    if (isNaN(tok)) {
      switch (tok) {
        case "+":
        case "-":
        case "*":
        case "/":
          while (op.length && checkPrec(op[op.length - 1], tok))
            num.push(op.pop());
          op.push(tok);
          break;
      }
    } else num.push(tok);
  }
  while (op.length) num.push(op.pop());
  return num;
}

function calPostfix(exp) {
  let tok,
    n1,
    n2,
    stack = [];
  exp.forEach(function (element) {
    tok = element;
    if (isNaN(tok)) {
      n2 = Number(stack.pop());
      n1 = Number(stack.pop());
      switch (tok) {
        case "*":
          stack.push(n1 * n2);
          break;
        case "/":
          stack.push(n1 / n2);
          break;
        case "+":
          stack.push(n1 + n2);
          break;
        case "-":
          stack.push(n1 - n2);
          break;
      }
    } else stack.push(tok);
  });
  return stack.pop();
}

/* for문으로 만든거
function calPostfix(exp) {
  let i,
    tok,
    n1,
    n2,
    stack = [];
  for (i in exp) {
    tok = exp[i];
    if (isNaN(tok)) {
      n2 = Number(stack.pop());
      n1 = Number(stack.pop());
      switch (tok) {
        case "*":
          stack.push(n1 * n2);
          break;
        case "/":
          stack.push(n1 / n2);
          break;
        case "+":
          stack.push(n1 + n2);
          break;
        case "-":
          stack.push(n1 - n2);
          break;
      }
    } else stack.push(tok);
  }
  return stack.pop();
}
*/

//입출력
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let result = calPostfix(postfix(line));
  if (line.length < 201) {
    console.log("result:", result);
  } else {
    console.log("다시 입력하시오.");
  }
  //rl.close();
}).on("close", function () {
  process.exit();
});

//console.log(calPostfix(postfix("1+3*2+2/1")));
//console.log(calPostfix(postfix("7+2*3*2-8/2*3")));
