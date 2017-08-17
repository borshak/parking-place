// Parking Lot ATD

const ParkingSpot = require('../parking-spot/interface');
const Vehicle = require('../vehicle/interface');

const SPOT_TYPE = {
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE'
};

// Constructor
const make = (options) => {

    const createSpots = (lot, spotType, amount) => {
        for(let i=0; i<amount; i++) {
            switch (spotType) {
                case SPOT_TYPE.SMALL:
                    lot.push(ParkingSpot.makeSmall());
                    break;

                case SPOT_TYPE.MEDIUM:
                    lot.push(ParkingSpot.makeMedium());
                    break;

                case SPOT_TYPE.LARGE:
                    lot.push(ParkingSpot.makeLarge());
                    break;

                default:
                    break;
            }
        }
        return lot;
    };

    const DESCRIPTION = (options && "DESCRIPTION" in options) ? options.DESCRIPTION : '';
    const SMALL_AMOUNT = (options && "SMALL" in options && options.SMALL > 0) ? options.SMALL : 0;
    const MEDIUM_AMOUNT = (options && "MEDIUM" in options && options.MEDIUM > 0) ? options.MEDIUM : 0;
    const LARGE_AMOUNT = (options && "LARGE" in options && options.LARGE > 0) ? options.LARGE : 0;

    const parkingLot = {
        DESCRIPTION: DESCRIPTION,
        LOT: {
            SMALL: [],
            MEDIUM: [],
            LARGE: []
        }
    };

    createSpots(parkingLot.LOT.SMALL, SPOT_TYPE.SMALL, SMALL_AMOUNT);
    createSpots(parkingLot.LOT.MEDIUM, SPOT_TYPE.MEDIUM, MEDIUM_AMOUNT);
    createSpots(parkingLot.LOT.LARGE, SPOT_TYPE.LARGE, LARGE_AMOUNT);

    return parkingLot;
};

const isSectionExist = (lot, sectionType) => {
    return !!(lot.LOT[sectionType].length);
};

const isContainsVehicles = (lot) => {
    const isSectionContainsVehicles = (lot, sectionType) => {
        return lot.LOT[sectionType].some((spot) => {
            return ParkingSpot.isContainsVehicle(spot);
        });
    };

    if (isSectionContainsVehicles(lot, SPOT_TYPE.SMALL)) return true;
    else if (isSectionContainsVehicles(lot, SPOT_TYPE.MEDIUM)) return true;
    else if (isSectionContainsVehicles(lot, SPOT_TYPE.LARGE)) return true;

    return false;
};


const placeVehicle = (lot, vehicle) => {
    const isSectionHasEmptySpot = (lot, sectionType) => {
        if (isSectionExist(lot, sectionType)) {
            return lot.LOT[sectionType].some((spot) => {
                return ParkingSpot.isEmpty(spot);
            });
        } else {
            return false;
        }
    };

    const findEmptySpot = (lot, sectionType) => {
        for (let i=0; i<lot.LOT[sectionType].length; i++) {
            if (ParkingSpot.isEmpty(lot.LOT[sectionType][i])) {
                return lot.LOT[sectionType][i];
            }
        }
        throw new Error('Something went wrong...');
    };

    const tryToPlaceVehicle = (lot, sectionType, vehicle) => {
        let result = false;

        if (isSectionHasEmptySpot(lot, sectionType)) {
            const spot = findEmptySpot(lot, sectionType);
            const vehicleFitToSpot = ParkingSpot.isFitToVehicle(spot, vehicle);
            if (vehicleFitToSpot) {
                result = ParkingSpot.placeVehicle(spot, vehicle);
            }
        }

        return result;
    };

    if (tryToPlaceVehicle(lot, SPOT_TYPE.SMALL, vehicle)) return true;
    else if (tryToPlaceVehicle(lot, SPOT_TYPE.MEDIUM, vehicle)) return true;
    else if (tryToPlaceVehicle(lot, SPOT_TYPE.LARGE, vehicle)) return true;

    return false;
};


const releaseVehicle = (lot) => {
    const isSectionContainsVehicles = (lot, sectionType) => {
        if (isSectionExist(lot, sectionType)) {
            return lot.LOT[sectionType].some((spot) => {
                return ParkingSpot.isContainsVehicle(spot);
            });
        } else {
            return false;
        }
    };

    const releaseVehicleFromSection = (lot, sectionType) => {
        for (let i=0; i<lot.LOT[sectionType].length; i++) {
            const spot = lot.LOT[sectionType][i];
            if (ParkingSpot.isContainsVehicle(spot)) return ParkingSpot.releaseVehicle(spot);
        }

        throw new Error('Something went wrong...');
    };

    if (isSectionContainsVehicles(lot, SPOT_TYPE.SMALL)) return releaseVehicleFromSection(lot, SPOT_TYPE.SMALL);
    else if (isSectionContainsVehicles(lot, SPOT_TYPE.MEDIUM)) return releaseVehicleFromSection(lot, SPOT_TYPE.MEDIUM);
    else if (isSectionContainsVehicles(lot, SPOT_TYPE.LARGE)) return releaseVehicleFromSection(lot, SPOT_TYPE.LARGE);

    return Vehicle.makeAbsent();

};


const toString = (lot) => {

    const sectionToString = (lot, sectionType, resultAcc) => {

        const newLine = '\n';
        let str = '';

        if (isSectionExist(lot, sectionType)) {
            str += `${sectionType} section --- ${newLine}`;
            for (let i=0; i<lot.LOT[sectionType].length; i++) {
                str += `[${i}]${ParkingSpot.toString(lot.LOT[sectionType][i])} ${newLine}`;
            }
        } else {
            str += `${sectionType} section --- don\'t exist ${newLine}`;
        }

        str += `${newLine}`;

        return str;
    };

    const newLine = '\n';
    let result = '';

    result += `Parking Lot ${lot.DESCRIPTION} ${newLine}`;
    result += `----------- ${newLine}`;

    result += sectionToString(lot, SPOT_TYPE.SMALL);
    result += sectionToString(lot, SPOT_TYPE.MEDIUM);
    result += sectionToString(lot, SPOT_TYPE.LARGE);

    return result;
};

module.exports = {
    makeLot: make,

    isContainsVehicles: isContainsVehicles,

    placeVehicle: placeVehicle,
    releaseVehicle: releaseVehicle,

    toString: toString
};