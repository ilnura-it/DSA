function twoSum (nums, target) {
   let newArr = []
   for (let i = 0; i < nums.length; i++){
      for (let j = i + 1; j < nums.length; j++){
         if (nums[i] + nums[j] === target) {
            newArr.push(i, j)
         }
      }
   }
   return newArr
};

console.log(twoSum([1, 4, 5, 8, 2], 3));