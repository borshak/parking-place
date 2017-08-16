// Vehicle Type

const VEHICLE_SIZE = {
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LAGRE: 'LARGE'
};

const make = (size, description) => {
    return {
        SIZE: size,
        DESCRIPTION: description
    };
};

const getSize = (vehicle) => {
    return vehicle.SIZE;
};

const getDescription = (vehicle) => {
    return vehicle.DESCRIPTION;
};

const toString = (vehicle) => {
    return `[ Vehicle: (${getSize(vehicle)}) ${getDescription(vehicle)} ]`;
};

module.exports = {
    VEHICLE_SIZE: VEHICLE_SIZE,
    make: make,
    getSize: getSize,
    getDescription: getDescription,
    toString: toString
};

