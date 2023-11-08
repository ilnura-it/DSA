function reverseInt(n) {
   const reversedNum =  n
      .toString()
      .split('')
      .reverse()
      .join('')
   return parseInt(reversedNum) * Math.sign(n)
}

reverseInt(-51);
reverseInt(900);
reverseInt(765);

module.exports = reverseInt;

// function reverseInt(n) {
//    let reversedNum =  n.toString().split('')
//    if (Math.sign(n) === -1) {
//       reversedNum.reverse();
//       reversedNum = reversedNum.slice(0, reversedNum.length - 1).join('');
//       return parseInt('-' + reversedNum)
//    }  else {
//    return parseInt(reversedNum.reverse().join(''))
//    } 
// }

// function reverseInt(n) {
//    let reversedNum =  n.toString().split('').reverse().join('')
//    if (n < 0) {
//       return parseInt(reversedNum) * -1
//    } 
//    return parseInt(reversedNum)
// }