// Parking Spot ATD

const Vehicle = require('../vehicle/interface');

const SPOT_TYPE = {
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE'
};


// Main constructor
const make = (spotType) => {
    return {
        TYPE: spotType,
        CONTENT: Vehicle.makeAbsent()
    };
};


// Additional constructors
const makeSmall = () => {
    return make(SPOT_TYPE.SMALL);
};

const makeMedium = () => {
    return make(SPOT_TYPE.MEDIUM);
};

const makeLarge = () => {
    return make(SPOT_TYPE.LARGE);
};

// Selectors
const getType = (parkingSpot) => {
    return parkingSpot.TYPE;
};

const getContent = (parkingSpot) => {
    return parkingSpot.CONTENT;
};


// Predicats
const isEmpty = (parkingSpot) => {
    const vehicle = getContent(parkingSpot);
    return Vehicle.isNotExist(vehicle);
};

const isContainsVehicle = (parkingSpot) => {
    return !isEmpty(parkingSpot);
};

const isSmall = (parkingSpot) => {
    return getType(parkingSpot) === SPOT_TYPE.SMALL;
};

const isMedium = (parkingSpot) => {
    return getType(parkingSpot) === SPOT_TYPE.MEDIUM;
};

const isLarge = (parkingSpot) => {
    return getType(parkingSpot) === SPOT_TYPE.LARGE;
};

const isFitToVehicle = (parkingSpot, vehicle) => {
    let result = false;

    switch (true) {
        case isLarge(parkingSpot):
        case isMedium(parkingSpot) && (Vehicle.isMedium(vehicle) || Vehicle.isSmall(vehicle)):
        case isSmall(parkingSpot) && Vehicle.isSmall(vehicle):
            result = true;
            break;

        default:
            result = false;
            break;
    }

    return result;
};


// Mutators
const placeVehicle = (parkingSpot, vehicle) => {
    if (isEmpty(parkingSpot) &&
        Vehicle.isExist(vehicle) &&
        isFitToVehicle(parkingSpot, vehicle)) {
        parkingSpot.CONTENT = vehicle;
        return true;
    } else {
        return false;
    }
};

const releaseVehicle= (parkingSpot) => {
    if (isContainsVehicle(parkingSpot)) {
        const vehicle = getContent(parkingSpot);
        parkingSpot.CONTENT = Vehicle.makeAbsent();
        return vehicle;
    } else {
        return Vehicle.makeAbsent();
    }
};

// Serializing
const toString = (parkingSpot) => {
    return `[ SPOT: ${getType(parkingSpot)} ][ ${Vehicle.toString(getContent(parkingSpot))} ] `;
};


module.exports = {
    makeSmall: makeSmall,
    makeMedium: makeMedium,
    makeLarge: makeLarge,

    isEmpty: isEmpty,
    isContainsVehicle: isContainsVehicle,
    isSmall: isSmall,
    isMedium: isMedium,
    isLarge: isLarge,
    isFitToVehicle: isFitToVehicle,

    placeVehicle: placeVehicle,
    releaseVehicle: releaseVehicle,

    toString: toString
};