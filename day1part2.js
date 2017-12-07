let nums = Array.from(process.argv[2]);
console.log(nums);
let numsA = nums.slice(0, (nums.length/2));
let numsB = nums.slice(nums.length/2);


let sum = 0;

for (i = 0; i < numsA.length; i++) {
    if (numsA[i] === numsB[i]) {
        sum += 2 * numsA[i];
    }
}

console.log('sum=' + sum);


