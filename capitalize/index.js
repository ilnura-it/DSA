function capitalize(str) {
   let result = str[0].toUpperCase();

   for(let i = 1; i < str.length; i++) {
      if (str[i - 1]  === ' '){
         result += str[i].toUpperCase()
      } else {
         result += str[i]
      }
   }
   return result
}

module.exports = capitalize;

capitalize('a short sentence')
capitalize('a lazy fox')

//OPTION I
//function capitalize(str) {
//   let newStr = str.split(' ')
//   let answer = newStr.map(i => i[0].toUpperCase() + i.slice(1)).join(' ')
//   return answer
//}

//OPTION II
//function capitalize(str) {
//   const words = [];
//   for (let word of str.split(' ')){
//      words.push(word[0].toUpperCase() + word.slice(1))
//   }
//   return words.join(' ')
//}