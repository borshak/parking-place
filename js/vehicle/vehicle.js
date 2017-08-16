// Vehicle ADT

const VEHICLE_TYPE = {
    ABSENT: 'ABSENT',
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE'
};


// Main constructor
const make = (size, description) => {
    return {
        TYPE: size,
        DESCRIPTION: description
    };
};


// Selectors
const getType = (vehicle) => {
    return vehicle.TYPE;
};

const getDescription = (vehicle) => {
    return vehicle.DESCRIPTION;
};


// Serializing
const toString = (vehicle) => {
    return `((${getType(vehicle)}) ${getDescription(vehicle)} )`;
};


// Additional constructors
const makeAbsent = () => {
    return make(VEHICLE_TYPE.ABSENT, '');
};

const makeSmall = (description) => {
    return make(VEHICLE_TYPE.SMALL, description);
};

const makeMedium = (description) => {
    return make(VEHICLE_TYPE.MEDIUM, description);
};

const makeLarge = (description) => {
    return make(VEHICLE_TYPE.LARGE, description);
};


// Predicats
const isNotExist = (vehicle) => {
    return getType(vehicle) === VEHICLE_TYPE.ABSENT;
};

const isExist = (vehicle) => {
    return !isNotExist(vehicle);
};

const isSmall = (vehicle) => {
    return getType(vehicle) === VEHICLE_TYPE.SMALL;
};

const isMedium = (vehicle) => {
    return getType(vehicle) === VEHICLE_TYPE.MEDIUM;
};

const isLarge = (vehicle) => {
    return getType(vehicle) === VEHICLE_TYPE.LARGE;
};


module.exports = {
    makeAbsent: makeAbsent,
    makeSmall: makeSmall,
    makeMedium: makeMedium,
    makeLarge: makeLarge,

    isNotExist: isNotExist,
    isExist: isExist,
    isSmall: isSmall,
    isMedium: isMedium,
    isLarge: isLarge,

    toString: toString
};