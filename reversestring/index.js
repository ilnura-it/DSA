function reverse(str) {
   // debugger;
   return str.split('').reduce((reversed, char) => char + reversed, "");
}

//console.log(reverse('apple'))
reverse('apple')

module.exports = reverse;

//function reverse(str) {
// return str
//   .split('')
//   .reverse()
//   .join('');
//}

//function reverse(str) {
//   let reversed_str = "";
//   for (let i = str.length - 1; i >= 0; i--){
//      reversed_str += str[i]
//   }
//   return reversed_str;
//}

//function reverse(str) {
//   let reversed_str = "";
//   for (let char of str){
//      reversed_str = char + reversed_str 
//   }
//   return reversed_str;
//}