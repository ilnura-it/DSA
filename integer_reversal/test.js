const reverseInt = require('./index'); // 

test('Reverse an integer', () => {
  // Test with a integer
  expect(reverseInt(765)).toBe(567);

  // Test with an zeros
  expect(reverseInt(900)).toBe(9);

  // Test with a negative number
  expect(reverseInt(-51)).toBe(-15);
});