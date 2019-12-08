const { GetFuelRequirement } = require('./main.js')

test('Example 1: Mass 12 requires 2 fuel', () => {
    expect(GetFuelRequirement(12)).toBe(2);
})

test('Example 2: Mass 14 requires 2 fuel', () => {
    expect(GetFuelRequirement(14)).toBe(2);
})

test('throws on invalid input', () => {
    expect(() => {
        GetFuelRequirement(0);
    }).toThrow(RangeError('invalid module mass'));

    expect(() => {
        GetFuelRequirement(-1);
    }).toThrow(RangeError('invalid module mass'));    
})

test('throws on invalid output', () => {
    expect(() => {
        GetFuelRequirement(1);
    }).toThrow(RangeError('invalid fuel requirement'));
})
