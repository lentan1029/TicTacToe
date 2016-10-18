const prompt = require('prompt');

const playerNames = [];
const players = [];

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
}

class Board {
  constructor() {
    this.board = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ];
  }
}

class Game {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.board = new Board();
    const toStart = Math.floor(Math.random() * 2);
    if (toStart === 0) {
      this.startingPlayer = 1;
    } else {
      this.startingPlayer = 2;
    }
    this.turn = this.startingPlayer;
  }
}

prompt.start();
prompt.get(['Please enter first player\'s name', 'Please enter second player\'s name'], (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    playerNames.push(data);
  }
});

playerNames.forEach((name) => {
  players.push(new Player(name));
});

const startGame = (p1, p2) => {
  const game = new Game(p1, p2);
  console.log(game);
};

prompt.get(['Do you wish to start a game? (y/n)'], (err, data) => {
  if (err) {
    throw new Error(err);
  } else if (data === 'y') {
    const game = startGame(players[0], players[1]);
  } else {
    console.log('Program ending...');
  }
});
