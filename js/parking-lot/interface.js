const ParkingLot = require('./implementation');

module.exports = {
    makeLot: ParkingLot.makeLot,

    isContainsVehicles: ParkingLot.isContainsVehicles,

    placeVehicle: ParkingLot.placeVehicle,
    releaseVehicle: ParkingLot.releaseVehicle,

    toString: ParkingLot.toString
};