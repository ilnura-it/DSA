function matrixspiral(n){
   let result = [];
   let counter = 1;
   let col_start = 0;
   let row_start = 0;
   let col_end = n - 1;
   let row_end = n - 1;
   while( (col_start <= col_end) && (row_start <= row_end) ){
      if (!result[row_start]) {
         result[row_start] = [];
      }
      for (let i = 0; i <= col_end; i++){
         result[row_start][i] = counter;
         counter++;   
      }
      row_start++;
      
     for (let j = 0; j <= row_end; j++){
        if (!result[i]) {
           result[i] = [];
        }
        result[i][col_end] = counter;
        counter++;
     }
     row_end--;
   }
   console.log(result)
   }

//function matrixspiral(n) {
//   let result = [];
//   counter = 1;
//   //counter_end = n * n;
//   for(let i = 0; i < n; i++) {
//      let row = [];
//      for (let j = 0; j < n; j++) {       
//       row.push(counter);
//       counter++;       
//   }
//   result.push(row);
//}
//   console.log(result);
//
//}
   
   module.exports = matrixspiral;
   
   matrixspiral(3)

