function longestCommonPrefix(strs) {
   if (!strs.length) return ''
   if (strs.length === 1) return strs[0];
   let ans = ''

   for (let i = 0; i < strs[0].length; i++) {
      let currentChar = strs[0][i];

      for (let j = 1; j < strs.length; j++) {
         if (i >= strs[j].length || currentChar !== strs[j][i]) {
            // If characters don't match, stop and return the current common prefix
            return ans;
         }
      }
     // if (ans.indexOf(currentChar) === -1) {
     //          ans.push(currentChar);
     //       }
     ans += currentChar;
   }
   return ans
};

module.exports = longestCommonPrefix;

longestCommonPrefix(["flow", "flight", "flower"])
longestCommonPrefix(["dog","racecar","car"])
longestCommonPrefix(["flower","flower","flower","flower"])
longestCommonPrefix(["aa", "aa"])