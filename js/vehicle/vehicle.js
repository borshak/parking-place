const VEHICLE_SIZE = {
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LAGRE: 'LARGE'
};

const makeVehicle = (size, description) => {
    return {
        SIZE: size,
        DESCRIPTION: description
    };
};

const makeSmallVehicle = (description) => {
    return makeVehicle(VEHICLE_SIZE.SMALL, description);
};

const makeMediumVehicle = (description) => {
    return makeVehicle(VEHICLE_SIZE.MEDIUM, description);
};

const makeLargeVehicle = (description) => {
    return makeVehicle(VEHICLE_SIZE.LAGRE, description);
};

const getSize = (vehicle) => {
    return vehicle.SIZE;
};

const getDescription = (vehicle) => {
    return vehicle.DESCRIPTION;
};

const isSmall = (vehicle) => {
    return getSize(vehicle) === VEHICLE_SIZE.SMALL;
};

const isMedium = (vehicle) => {
    return getSize(vehicle) === VEHICLE_SIZE.MEDIUM;
};

const isLarge = (vehicle) => {
    return getSize(vehicle) === VEHICLE_SIZE.LAGRE;
};

const toString = (vehicle) => {
    return `[ Vehicle: (${getSize(vehicle)}) ${getDescription(vehicle)} ]`;
};

module.exports = {
    makeSmallVehicle: makeSmallVehicle,
    makeMediumVehicle: makeMediumVehicle,
    makeLargeVehicle: makeLargeVehicle,
    getSize: getSize,
    getDescription: getDescription,
    isSmall: isSmall,
    isMedium: isMedium,
    isLarge: isLarge,
    toString: toString
};