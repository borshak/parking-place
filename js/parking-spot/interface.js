var ParkingSpot = require('./implementation');

module.exports = {
    makeSmall: ParkingSpot.makeSmall,
    makeMedium: ParkingSpot.makeMedium,
    makeLarge: ParkingSpot.makeLarge,

    isEmpty: ParkingSpot.isEmpty,
    isContainsVehicle: ParkingSpot.isContainsVehicle,
    isSmall: ParkingSpot.isSmall,
    isMedium: ParkingSpot.isMedium,
    isLarge: ParkingSpot.isLarge,
    isFitToVehicle: ParkingSpot.isFitToVehicle,

    placeVehicle: ParkingSpot.placeVehicle,
    releaseVehicle: ParkingSpot.releaseVehicle,

    toString: ParkingSpot.toString
};