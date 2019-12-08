// Get the input module masses from a text file
const { ReadLines } = require('./file.js');
lines = ReadLines('./input.txt');
linesAsInts = lines.map(function(item) {
    return parseInt(item, 10);
});

// Sum the fuel requirements for each module
const { TotalFuelRequirement } = require('./rocket.js');
console.log(TotalFuelRequirement(linesAsInts));
