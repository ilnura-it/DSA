function chunk(array, size){
   const newArr = [];

   for (let elem of array){
      const last = newArr[newArr.length - 1];

      if (!last || last.length === size){
         newArr.push([elem]);
      } else {
         last.push(elem);
      }
   }
   return newArr;
}

module.exports = chunk;

//console.log(chunk([1, 2, 3, 4, 5], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
//console.log(chunk([1, 2, 3, 4, 5], 4))
//console.log(chunk([1, 2, 3, 4, 5], 10))

//function chunk(array, size){
//   newArr = [];
//   array.forEach(i => {
//      let chunk = array.splice(0, size)
//      newArr.push(chunk);
//   })
//   if (array.length > 0) {
//      newArr.push(array);
//   }
//   return newArr;
//}