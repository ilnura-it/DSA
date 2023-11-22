function pyramid(n) {

   for (let row = 1; row <= n; row++) {
    let space = ' '.repeat(n - row)
    let hash = '#'.repeat((2 * row)- 1)
    const str = space + hash + space
     console.log(str);
   }
   
}

module.exports = pyramid;

pyramid(4)