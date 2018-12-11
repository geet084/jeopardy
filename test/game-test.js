const chai = require('chai');
const expect = chai.expect;
global.Player = require('../js/player.js');
global.Board = require('../js/board.js');
global.DataManager = require('../js/dataManager');
global.Wager = require('../js/wager');
const Game = require('../js/game.js');

describe('Make a game', function () {
  let game;

  beforeEach(function () {
    
    game = new Game(['Adam', 'Bob', 'Cat']);
  });

  it('Should be able to have rounds', function () {

    expect(game.round).to.equal(1);
  });

  it('Should be able to have 3 players', function () {

    expect(game.players[0]).to.deep.equal(new Player('Adam'));
    expect(game.players[1]).to.deep.equal(new Player('Bob'));
    expect(game.players[2]).to.deep.equal(new Player('Cat'));
  });

  it('Should be able to have a board', function () {

    expect(game.board).to.deep.equal({});
  });
});