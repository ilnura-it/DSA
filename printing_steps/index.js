function steps(n, row = 0, stair = ''){
   if (n === row ) {
      return
   }

   if (n === stair.length){
      console.log(stair)
      return steps(n, row + 1)
   }

   if (stair.length <= row) {
      stair += "#";
   } else {
      stair += " "
   }
   steps(n, row, stair)

  // const add = stair.length <= row ? "#" : " ";
  // steps(n, row, stair + add)

}
   
steps(3)

module.exports = steps;

//function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let newArr = '';
// 
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         newArr += '#';
//       } else {
//         newArr += 'b';
//       }
//     }
// 
//     console.log(newArr);
//   }
// }