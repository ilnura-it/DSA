function palindrome (str) {
   return str.split('').every((char, i) => {
      console.log(str[str.length - i - 1])
      return char === str[str.length - i - 1];
   })
}

module.exports = palindrome;

palindrome("abba")
//palindrome("capitalization")
//console.log(palindrome("10101"))

//function palindrome (str) {
//   return str === str.split('').reverse().join('')
//}
