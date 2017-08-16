var ParkingSpot = require('./implementation');

module.exports = {
    makeSmall: ParkingSpot.makeSmall,
    makeMedium: ParkingSpot.makeMedium,
    makeLarge: ParkingSpot.makeLarge,

    getType: ParkingSpot.getType,
    getContent: ParkingSpot.getContent,

    placeVehicle: ParkingSpot.placeVehicle,
    releaseVehicle: ParkingSpot.releaseVehicle,

    toString: ParkingSpot.toString
};