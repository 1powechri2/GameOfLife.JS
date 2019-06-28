const pry = require('pryjs')

class GameOfLife {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  world() {
    let world = [];
    let i = 0;

    for(i = 0; i < this.height; i++) {
      world[i] = new Array
      let j = 0;
      for(j = 0; j < this.width; j++){
        world[i][j] = Math.round(Math.random());
      };
    };
    return world;
  };

  emptyWorld() {
    let emptyWorld = [];
    let i = 0;

    for(i = 0; i < this.height; i++) {
      emptyWorld[i] = new Array
      let j = 0;
      for(j = 0; j < this.width; j++){
        emptyWorld[i][j] = null;
      };
    };
    return emptyWorld;
  }
}

module.exports = GameOfLife;
