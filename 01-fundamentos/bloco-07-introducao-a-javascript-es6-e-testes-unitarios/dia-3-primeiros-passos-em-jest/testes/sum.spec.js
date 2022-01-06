const sum = require('./sum');

test('soma de dois valores', () => {
  expect(sum(4,5)).toBe(9);
  expect(0,0).toBe(0);
  expect(4, "5").toThrow()
})