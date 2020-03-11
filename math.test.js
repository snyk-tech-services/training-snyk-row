const math = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(math.sum(1, 2)).toBe(3);
});

test('doublesum adds 1 + 2 to equal 6', () => {
  expect(math.doublesum(1, 2)).toBe(9);
});
