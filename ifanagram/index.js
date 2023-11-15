function isAnagram(strA, strB) {
   return cleanStr(strA) === cleanStr(strB);
};

function cleanStr(str) {
   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = isAnagram

//isAnagram('cat', 'rat')
isAnagram('anagram', 'nagaram')
isAnagram('Fairly Tale!!!', 'Sail Trail!!!!')
isAnagram('hello', 'llohe')

//OPTION II
//function isAnagram(strA, strB) {
//   const aCharMap = buildCharMap(strA);
//   const bCharMap = buildCharMap(strB);
//   //console.log(aCharMap, bCharMap);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//      return false;
//   }
//   for (let char in aCharMap) {
//      if (aCharMap[char] !== bCharMap[char]) {
//         return false
//      }
//   };
//   return true;
//};
//function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//      charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap
//}



// Option I
//function isAnagram(s, t) {
//   // console.log(s, t)
//    if (s.length != t.length){
//       return false;
//    }
//    let newS = s.split('').sort().join('').toLowerCase();
//    let newT = t.split('').sort().join('').toLowerCase();
//   console.log(newS, newT)
//   // return newS == newT
//    console.log(newS == newT)
//  };