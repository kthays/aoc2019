module.exports = {
    GetFuelRequirement,
}

// Fuel required to launch a given module is based on its mass.
//  Specifically, to find the fuel required for a module, 
//  take its mass, divide by three, round down, and subtract 2.
function GetFuelRequirement(moduleMass) {
    // Validate our input
    if (moduleMass <= 0) throw RangeError('invalid module mass');

    // Fuel calculation
    const fuel = Math.floor((moduleMass / 3)) - 2;

    // Validate fuel calculation
    if (fuel <= 0) throw new RangeError('invalid fuel requirement');

    return fuel;
}
