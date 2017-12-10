module.exports = function (input) {
    let sum = 0;
    
    input.forEach(currentLine => {
        //for each line of input, convert the line into a sorted array of integers, 
        let sortedInts = currentLine.split(" ").map(value => parseInt(value)).sort((a, b) => a - b);
        
        //for each element in the array, compare it to all others to check for modulus = 0
        sortedInts.find(() => {
            let divisor = sortedInts.shift();
            let dividend = sortedInts.find(iter => iter % divisor === 0);
            if (dividend) {
                sum += (dividend / divisor);
                return true;
            }
            return false;
        });
    });
    return sum;
}