const part1SampleInput = [ "5 1 9 5", "7 5 3", "2 4 6 8"];
const part2SampleInput = [ "5 9 2 8", "9 4 7 3", "3 8 6 5"];
const input = require('./input.json');

const checksum1 = require('./day2part1');
const checksum2 = require('./day2part2');

test('it calculates part 1 checksum from the sample input', () => {
  expect(checksum1(part1SampleInput)).toBe(18);
});

test('it calculates part 1 checksum form the official input', () => {
    expect(checksum1(input.input)).toBe(42299);
});

test('it calculates part 2 checksum from the sample input', () => {
    expect(checksum2(part2SampleInput)).toBe(9);
});

test('it calculates part 2 checksum from the official input', () => {
    expect(checksum2(input.input)).toBe(277);
})


