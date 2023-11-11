const longestCommonPrefix = require('./index')

test('Find the longest common prefix', () => {

   expect(longestCommonPrefix(["flow", "flight", "flower"])).toBe("fl");
 
   expect(longestCommonPrefix(["flower","flower","flower","flower"])).toBe("flower");
 
   expect(longestCommonPrefix(["aa", "aa"])).toBe("aa");
 });