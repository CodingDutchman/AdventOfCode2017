module.exports = function (nums) {
  nums = nums.concat(nums[0]);

  let prevNum = undefined;
  let sum = 0;

  nums.forEach(num => {
      if (prevNum === num) {
          sum += parseInt(prevNum);
      } 
      
      prevNum = num;
  });

  return sum;
};
