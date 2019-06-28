const GameOfLife = require('../lib/gameOfLife')
const pry = require('pryjs')

const gameOfLife = new GameOfLife(4, 5);

test('it can be intialized', () => {
  expect(gameOfLife.height).toBe(4);
  expect(gameOfLife.width).toBe(5);
})

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
})

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
})
