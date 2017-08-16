const Vehicle = require('./base.js');

const makeSmall = (description) => {
    return Vehicle.make(Vehicle.VEHICLE_SIZE.SMALL, description);
};

const makeMedium = (description) => {
    return Vehicle.make(Vehicle.VEHICLE_SIZE.MEDIUM, description);
};

const makeLarge = (description) => {
    return Vehicle.make(Vehicle.VEHICLE_SIZE.LAGRE, description);
};

const isSmall = (vehicle) => {
    return Vehicle.getSize(vehicle) === Vehicle.VEHICLE_SIZE.SMALL;
};

const isMedium = (vehicle) => {
    return Vehicle.getSize(vehicle) === Vehicle.VEHICLE_SIZE.MEDIUM;
};

const isLarge = (vehicle) => {
    return Vehicle.getSize(vehicle) === Vehicle.VEHICLE_SIZE.LAGRE;
};

module.exports = {
    makeSmall: makeSmall,
    makeMedium: makeMedium,
    makeLarge: makeLarge,
    isSmall: isSmall,
    isMedium: isMedium,
    isLarge: isLarge,
    toString: Vehicle.toString
};