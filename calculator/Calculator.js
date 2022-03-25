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

exports.postfix = postfix;
exports.calPostfix = calPostfix;

//export { postfix, calPostfix };
