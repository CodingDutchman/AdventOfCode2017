module.exports = function (input) {
    //for each line of input, convert the line into an array of integers, 
    //then reduce each array of integers to a difference between the min an max
    return input.reduce((acc, currentLine) => {
        let sortedInts = currentLine.split(" ").map(value => parseInt(value)).sort((a, b) => a - b);
        return acc + (sortedInts[sortedInts.length-1]-sortedInts[0]);
    }, 0);
}