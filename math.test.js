const math = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(math.sum(1, 2)).toBe(3);
});

test('triplesum adds 1 + 2 to equal 9', () => {
  expect(math.triplesum(1, 2)).toBe(9);
});
