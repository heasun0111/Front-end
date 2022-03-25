const Queen = require("./Queen.js");
const Rook = require("./Rook.js");
const Bishop = require("./Bishop.js");
const Pawn = require("./Pawn.js");
const Knight = require("./Knight.js");

class Board {
  _board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  showBoard() {
    board.forEach((i) => {
      console.log(
        showPieces(i[0]) +
          showPieces(i[1]) +
          showPieces(i[2]) +
          showPieces(i[3]) +
          showPieces(i[4]) +
          showPieces(i[5]) +
          showPieces(i[6]) +
          showPieces(i[7])
      );
    });
  }
}
module.exports = { Board };
