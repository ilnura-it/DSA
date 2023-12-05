//Memoized solution, improving runtime performance

function memoize(fn){
   const cache = {};
   return function(...args){
      if (cache[args]) {
         return cache[args];
      }

      const result = fn.apply(this, args);
      cache[args] = result;

      return result;
   }
}

function slowFibonacci(n){
   if (n < 2) {
      return n;
   }

   return fibonacci(n - 1) + fibonacci(n - 2)
}

const fibonacci = memoize(slowFibonacci);

module.exports = fibonacci;

fibonacci(8)

//function fibonacci(n){
//   let result = [0, 1]
//   
//   for (let i = 2; i <= n; i++){
//      const a = result[i - 1];
//      const b = result[i - 2];
//   
//      result.push(a + b);
//   }
//   return result[n];
//}

//Option II (exponential runtime)
//function fibonacci(n){
//   if (n < 2) {
//      return n;
//   }
//
//   return fibonacci(n - 1) + fibonacci(n - 2)
//}

//function fibonacci(n){
//   if (n < 2) {
//      return n;
//   }
//
//   return fibonacci(n - 1) + fibonacci(n - 2)
//}