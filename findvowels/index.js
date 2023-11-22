function vowels(str) {
   const matches = str.match(/[aeiou]/gi);
   console.log(matches ? matches.length : 0)
}

//vowels("I am happy");
//vowels('Hi There!')
vowels('Why do you ask?')

module.exports = vowels;

//OPTION I
//function vowels(str) {
//   const vowelsArr = ['a', 'e', 'i', 'o', 'u']
//   let count = 0;
//   str = str.toLowerCase();
//
//   vowelsArr.forEach(i => {
//   for (let char = 0; char < str.length; char++) {
//      if (i === str[char]){
//         console.log(i, str[char])
//         count++;
//      }            
//    }
//   }) 
//    console.log(count)
//}

//OPTION II
//function vowels(str) {
//   const vowelsCheck = 'aeiou'
//   let count = 0;
//
//   for (char of str.toLowerCase()){
//      if (vowelsCheck.includes(char)){
//         count++;
//      }
//   }
//   console.log(count)
//}

//OPTION III
//function vowels(str) {
//   const vowelsCheck = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//
//   for (char of str.toLowerCase()){
//      if (vowelsCheck.includes(char)){
//         count++;
//      }
//   }
//   console.log(count)
//}