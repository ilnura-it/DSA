function isAnagram(s, t) {
   if (s.length != t.length){
      return false;
   }
   let newS = s.split('').sort().join('')
   let newT = t.split('').sort().join('')
  
   return newS == newT

 };

module.exports = isAnagram

isAnagram('cat', 'rat')
isAnagram('anagram', 'nagaram')