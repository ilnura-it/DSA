const matrixspiral = require('./index'); // Update with the correct path to your file

describe('matrixspiral', () => {
   test('generates a spiral matrix correctly', () => {
      // Test case with n = 3
      expect(matrixspiral(3)).toEqual([
         [1, 2, 3],
         [8, 9, 4],
         [7, 6, 5]
      ]);

      // Test case with n = 4
      expect(matrixspiral(4)).toEqual([
         [1, 2, 3, 4],
         [12, 13, 14, 5],
         [11, 16, 15, 6],
         [10, 9, 8, 7]
      ]);

      // Test case with n = 5
      expect(matrixspiral(5)).toEqual([
         [ 1, 2, 3, 4, 5 ],
         [ 16, 17, 18, 19, 6 ],
         [ 15, 24, 25, 20, 7 ],
         [ 14, 23, 22, 21, 8 ],
         [ 13, 12, 11, 10, 9 ]
       ]);
   });
});