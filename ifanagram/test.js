const isAnagram = require('./index');

test('If a string is a palindrome', () => {
   // Test with a simple string
   expect(isAnagram('apple', 'caple')).toBe(false);
 
   // Test with an empty string
   expect(isAnagram('abba', 'baba')).toBe(true);
 
   // Test with a string containing special characters
   expect(isAnagram('anagram', 'nagaram')).toBe(true);
 });