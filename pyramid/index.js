function pyramid(n, row = 0, level = '') {
  if (n === row) {
    return;
  }

  if (2 * n - 1 === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;

pyramid(5)

//Option I
//function pyramid(n) {
//  for (let row = 1; row <= n; row++) {
//   let space = ' '.repeat(n - row)
//   let hash = '#'.repeat((2 * row)- 1)
//   const str = space + hash + space
//   console.log(str);
//  }
//}

//OPTION II
//function pyramid(n) {
//  const midpoint = Math.floor((2 * n - 1) / 2)
//  for (let row = 0; row < n; row++) {
//    let level = "";
//    for (let column = 0; column < 2 * n - 1; column++) {
//      if (midpoint - row <= column && midpoint + row >= column) {
//        level += "#"
//      } else {
//        level += " "
//      }
//    }
//    console.log(level)
//  }
//}