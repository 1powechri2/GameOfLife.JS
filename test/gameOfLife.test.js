const GameOfLife = require('../lib/gameOfLife')
const pry = require('pryjs')
// eval(pry.it)

const gameOfLife = new GameOfLife(4, 5);
const testWorld = [[1,0,1],
                   [0,0,1],
                   [1,1,1]]

test('it can be intialized', () => {
  expect(gameOfLife.height).toBe(4);
  expect(gameOfLife.width).toBe(5);
});

test('it can return a two dimensional array from the height and width\
containg binary values', () => {
  expect(gameOfLife.world()).toBeInstanceOf(Array)

  expect(gameOfLife.world()[0]).toBeInstanceOf(Array)
  expect(gameOfLife.world()[1]).toBeInstanceOf(Array)
  expect(gameOfLife.world()[2]).toBeInstanceOf(Array)
  expect(gameOfLife.world()[3]).toBeInstanceOf(Array)

  expect(gameOfLife.world()[0][1]).toBeLessThan(2)
  expect(gameOfLife.world()[0][1]).toBeGreaterThan(-1)
  expect(gameOfLife.world()[1][2]).toBeLessThan(2)
  expect(gameOfLife.world()[1][2]).toBeGreaterThan(-1)
  expect(gameOfLife.world()[2][3]).toBeLessThan(2)
  expect(gameOfLife.world()[2][3]).toBeGreaterThan(-1)
  expect(gameOfLife.world()[3][4]).toBeLessThan(2)
  expect(gameOfLife.world()[3][4]).toBeGreaterThan(-1)
});

test('it can create an empty world to fill with next generation', () => {
  expect(gameOfLife.emptyWorld()).toBeInstanceOf(Array)

  expect(gameOfLife.emptyWorld()[0]).toBeInstanceOf(Array)
  expect(gameOfLife.emptyWorld()[1]).toBeInstanceOf(Array)
  expect(gameOfLife.emptyWorld()[2]).toBeInstanceOf(Array)
  expect(gameOfLife.emptyWorld()[3]).toBeInstanceOf(Array)

  expect(gameOfLife.emptyWorld()[0][1]).toBeNull()
  expect(gameOfLife.emptyWorld()[0][1]).toBeNull()
  expect(gameOfLife.emptyWorld()[1][2]).toBeNull()
  expect(gameOfLife.emptyWorld()[1][2]).toBeNull()
  expect(gameOfLife.emptyWorld()[2][3]).toBeNull()
  expect(gameOfLife.emptyWorld()[2][3]).toBeNull()
  expect(gameOfLife.emptyWorld()[3][4]).toBeNull()
  expect(gameOfLife.emptyWorld()[3][4]).toBeNull()
});

test('cellVal will return 0 for an undefined value', () => {
  expect(gameOfLife.cellVal(-1,0,testWorld)).toBe(0)
  expect(gameOfLife.cellVal(1,3,testWorld)).toBe(0)
})

test('cellVal will return accurate for defined value', () => {
  expect(gameOfLife.cellVal(0,2,testWorld)).toBe(1)
  expect(gameOfLife.cellVal(1,2,testWorld)).toBe(1)
  expect(gameOfLife.cellVal(1,1,testWorld)).toBe(0)
})

test('neighborsCount will return accurate count of neighbors', () => {
  expect(gameOfLife.neighborsCount(0,0,testWorld)).toBe(0)
  expect(gameOfLife.neighborsCount(0,1,testWorld)).toBe(3)
  expect(gameOfLife.neighborsCount(1,1,testWorld)).toBe(6)
  expect(gameOfLife.neighborsCount(2,2,testWorld)).toBe(2)
})

test('checkEvolution can provide accurate next generation for an individual', () => {
  expect(gameOfLife.checkEvolution(1, 0)).toBe('Dead')
  expect(gameOfLife.checkEvolution(1, 1)).toBe('Dead')
  expect(gameOfLife.checkEvolution(1, 2)).toBe('Live')
  expect(gameOfLife.checkEvolution(1, 3)).toBe('Live')
  expect(gameOfLife.checkEvolution(1, 4)).toBe('Dead')
  expect(gameOfLife.checkEvolution(1, 5)).toBe('Dead')
  expect(gameOfLife.checkEvolution(1, 6)).toBe('Dead')
  expect(gameOfLife.checkEvolution(1, 7)).toBe('Dead')
  expect(gameOfLife.checkEvolution(1, 8)).toBe('Dead')
  expect(gameOfLife.checkEvolution(0, 0)).toBe('Dead')
  expect(gameOfLife.checkEvolution(0, 1)).toBe('Dead')
  expect(gameOfLife.checkEvolution(0, 2)).toBe('Dead')
  expect(gameOfLife.checkEvolution(0, 3)).toBe('Live')
  expect(gameOfLife.checkEvolution(0, 4)).toBe('Dead')
  expect(gameOfLife.checkEvolution(0, 5)).toBe('Dead')
  expect(gameOfLife.checkEvolution(0, 6)).toBe('Dead')
  expect(gameOfLife.checkEvolution(0, 7)).toBe('Dead')
  expect(gameOfLife.checkEvolution(0, 8)).toBe('Dead')
})

test('it can play the game of life', () => {
  firstGen = [ [ 0, 1, 1, 0, 0 ],
               [ 0, 1, 0, 1, 0 ],
               [ 1, 0, 0, 0, 0 ],
               [ 1, 0, 1, 1, 1 ] ]
  secondGen = [ [ 0, 1, 1, 0, 0 ],
                [ 1, 1, 0, 0, 0 ],
                [ 1, 0, 0, 0, 1 ],
                [ 0, 1, 0, 1, 0 ] ]
  expect(gameOfLife.readWorld(firstGen)).toEqual(secondGen)
});
