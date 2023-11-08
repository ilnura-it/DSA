const reverseInt = require('./index'); // 

test('Reverse an integer', () => {
  // Test with a simple string
  expect(reverseInt(765)).toBe(567);

  // Test with an empty string
  expect(reverseInt(900)).toBe(9);

  // Test with a string containing special characters
  expect(reverseInt(-51)).toBe(-15);
});