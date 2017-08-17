const TrafficQueue = require('./implementation');

module.exports = {
    makeQueue: TrafficQueue.makeQueue,

    isEmpty: TrafficQueue.isEmpty,
    isContainsVehicles: TrafficQueue.isContainsVehicles,

    addToTail: TrafficQueue.addToTail,
    releaseFromHead: TrafficQueue.releaseFromHead,

    toString: TrafficQueue.toString
};