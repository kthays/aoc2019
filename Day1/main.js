const { ReadLines } = require('./file.js');


lines = ReadLines('./test/numbers.txt');
linesAsInts = lines.map(function(item) {
    return parseInt(item, 10);
});

console.log(linesAsInts);

reduced = linesAsInts.reduce(function(a, b) { return a + b; }, 0)
console.log(reduced);