let nums = Array.from(process.argv[2]);
//repeat the first num at the end (circular)
nums = nums.concat(nums[0]);

let prevNum = undefined;
let sum = 0;

nums.forEach(num => {
    if (prevNum === num) {
        sum += parseInt(prevNum);
    } 
    
    prevNum = num;
});

console.log('sum=' + sum);


