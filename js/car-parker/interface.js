const CarParker = require('./implementation');

module.exports = {
    makeParker: CarParker.makeParker,

    sortQueue: CarParker.sortQueue,
    parkVehicle: CarParker.parkVehicle,
    releaseVehicle: CarParker.releaseVehicle
};