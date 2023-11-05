const palindrome = require('./index');

test('If a string is a palindrome', () => {
   // Test with a simple string
   expect(palindrome('apple')).toBe(false);
 
   // Test with an empty string
   expect(palindrome('abba')).toBe(true);
 
   // Test with a string containing special characters
   expect(palindrome('pennep')).toBe(true);
 });