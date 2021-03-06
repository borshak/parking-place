const CarParker = require('./implementation');

module.exports = {
    makeParker: CarParker.makeParker,

    sortQueue: CarParker.sortQueue,
    parkVehicle: CarParker.parkVehicle,
    parkQueue: CarParker.parkQueue,

    releaseVehicle: CarParker.releaseVehicle,
    releaseWholeLot: CarParker.releaseWholeLot
};