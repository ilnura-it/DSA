const reverse = require('./index'); // Import the reverse function

test('Reverse a string', () => {
  // Test with a simple string
  expect(reverse('apple')).toBe('elppa');

  // Test with an empty string
  expect(reverse('')).toBe('');

  // Test with a string containing special characters
  expect(reverse('123@#$')).toBe('$#@321');
});

// You can add more test cases as needed
