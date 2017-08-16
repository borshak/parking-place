var TrafficQueue = require('./implementation');

module.exports = {
    makeQueue: TrafficQueue.makeQueue,

    addVehicle: TrafficQueue.addVehicle,
    releaseFirstVehicle: TrafficQueue.releaseFirstVehicle,

    isEmpty: TrafficQueue.isEmpty,

    toString: TrafficQueue.toString
};