// OPTION III
//function chunk(array, size){
//   const chunked = [];
//   let index = 0
//   while (index < array.length) {
//      chunked.push(array.slice(index, index + size))
//      index += size
//   }
//   return chunked;
//}

module.exports = chunk;

//OPTION I
function chunk(array, size){
   newArr = [];
  while (array.length > 0) {
      let chunk = array.splice(0, size)
      newArr.push(chunk);
   }

   return newArr;
}


//OPTION II
//function chunk(array, size){
//   const newArr = [];
//   for (let elem of array){
//      const last = newArr[newArr.length - 1];
//      if (!last || last.length === size){
//         newArr.push([elem]);
//      } else {
//         last.push(elem);
//      }
//   }
//   return newArr;
//}

//console.log(chunk([1, 2, 3, 4, 5], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
//console.log(chunk([1, 2, 3, 4, 5], 4))
console.log(chunk([1, 2, 3, 4, 5], 10))