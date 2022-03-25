class Piece {
  constructor() {}

  move(from, to, turn) {}

  moving(to) {
    this.position = to;
  }

  checkIfMovabale(pos, posfrom) {}
}

module.exports = { Piece };
