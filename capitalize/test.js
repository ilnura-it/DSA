const capitalize = require('./index');

test('If the first letter of each word is capitalized', () => {
   expect(capitalize('a short sentence')).toBe('A Short Sentence');
 
   expect(capitalize('a lazy fox')).toBe('A Lazy Fox');
 
   expect(capitalize('look, it is working!')).toBe('Look, It Is Working!');
 });