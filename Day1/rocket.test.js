const { ModuleFuelRequirement } = require('./rocket.js')

test('Example 1: Mass 12 requires 2 fuel', () => {
    expect(ModuleFuelRequirement(12)).toBe(2);
})

test('Example 2: Mass 14 requires 2 fuel', () => {
    expect(ModuleFuelRequirement(14)).toBe(2);
})

test('throws on invalid input', () => {
    expect(() => {
        ModuleFuelRequirement(0);
    }).toThrow(RangeError('invalid module mass'));

    expect(() => {
        ModuleFuelRequirement(-1);
    }).toThrow(RangeError('invalid module mass'));    
})

test('throws on invalid output', () => {
    expect(() => {
        ModuleFuelRequirement(1);
    }).toThrow(RangeError('invalid fuel requirement'));
})


const { TotalFuelRequirement } = require('./rocket.js')
test('functional accumulator', () => {
    const input = [12, 14];
    expect(TotalFuelRequirement(input)).toBe(4);
})