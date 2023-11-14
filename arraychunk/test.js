const chunk = require('./index'); // 

test('Divide the array into subarrays', () => {
  
  expect(chunk([1, 2, 3, 4], 2)).toStrictEqual( [[ 1, 2], [3, 4]]);

  
  expect(chunk([1, 2, 3, 4, 5], 2)).toStrictEqual([[ 1, 2], [3, 4], [5]]);

  
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toStrictEqual([[ 1, 2, 3], [4, 5, 6], [7, 8]]);
});