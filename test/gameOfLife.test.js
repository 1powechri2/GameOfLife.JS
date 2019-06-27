const GameOfLife = require('../lib/gameOfLife')

test('it can be intialized', () => {
  const gofClass = new GameOfLife(5, 4);
  expect(gofClass.width).toBe(5);
  expect(gofClass.height).toBe(4);
})

test('it can return a two dimensional array from the height and width',
    () => {
      
    })
