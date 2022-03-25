//상속부분 공부하고 다시해보기...
//난 쓰레기야...ㅜㅜ
//난 왜 에러만 만드는걸까...
//ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ

const board = require("./Board.js");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

board.startGame();
let color = 1;

rl.on("line", (line) => {
  if (line == "end") {
    rl.close();
  } else if (line == "board") {
    board.showBoard();
  } else {
    let po = splitInput(line);
    board.move(po[0], po[1], color);
    color = color ? 0 : 1;
  }
});

rl.on("close", () => {
  process.exit();
});

function splitInput(ip) {
  return ip.split(" ");
}
