function maxChar(str){
   const chars = {};
   let max = 0;
   let maxChar = '';

    for (let char of str){
       if(chars[char]) {
          chars[char] ++;
       } else {
          chars[char] = 1;
       }
    }

    for (let char  in chars) {
      if (chars[char] > max) {
         max = chars[char];
         maxChar = char
      }
    }
    return maxChar;
}

module.exports = maxChar;

maxChar("heloo go ou")
maxChar("heeeeelo go eu")
maxChar("apple 1231111")

// function maxChar(str){
//    const chars = {};
//    for (let char of str){
//       if(!chars[char]) {
//          chars[char] = 1;
//       } else {
//          chars[char] ++;
//       }
//    }
//    console.log(chars);
// }

//function maxChar(str){
//   const charMap = {};
//   for (let char of str){
//      charMap[char] = charMap[char] + 1 || 1
//   }
//   console.log(charMap);
//   return Object.keys(charMap).reduce((a, b) => charMap[a] > charMap[b] ? a : b)
//}