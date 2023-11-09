const maxChar = require('./index');

test("Find the character with the most used", () => {
   expect(maxChar("heloo go ou")).toBe("o");
   expect(maxChar("JavaScript")).toBe('a');
   expect(maxChar("apple 1231111")).toBe('1');

})