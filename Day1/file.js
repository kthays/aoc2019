//  Returns an array containing one string for each line in the specified file.
//  Each element in the array has its whitespace trimmed
function ReadLines(filePath) {
    // Read the file
    const fileSystem = require('fs');
    let lines = fileSystem.readFileSync(filePath).toString().split('\n');

    // Remove all of the \r chars from each line
    lines.forEach(function(element, index) {
        lines[index] = element.trim();
    });
    return lines
}

module.exports = {
    ReadLines,
}
