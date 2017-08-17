// Car Parker

const Vehicle = require('../vehicle/interface');
const TrafficQueue = require('../traffic-queue/interface');
const ParkingLot = require('../parking-lot/interface');

// Constructor

const make = (name) => {
    return {
        NAME: name || ''
    };
};

const sortQueue = (parker, queue) => {
    if (TrafficQueue.isEmpty(queue)) return queue;

    const moveToQueue = (source, target) => {
        while(TrafficQueue.isContainsVehicles(source)) {
            TrafficQueue.addToTail(target, TrafficQueue.releaseFromHead(source));
        }
        return target;
    };

    const smallQ = TrafficQueue.makeQueue();
    const mediumQ = TrafficQueue.makeQueue();
    const largeQ = TrafficQueue.makeQueue();

    // Sort onto types
    while (TrafficQueue.isContainsVehicles(queue)) {
        const vehicle = TrafficQueue.releaseFromHead(queue);
        switch (true) {
            case Vehicle.isSmall(vehicle):
                TrafficQueue.addToTail(smallQ, vehicle);
                break;

            case Vehicle.isMedium(vehicle):
                TrafficQueue.addToTail(mediumQ, vehicle);
                break;

            case Vehicle.isLarge(vehicle):
                TrafficQueue.addToTail(largeQ, vehicle);
                break;

            default:
                throw new Error('Something went wrong...');
                break;
        }
    }

    // Return vehicles to input Queue
    moveToQueue(smallQ, queue);
    moveToQueue(mediumQ, queue);
    moveToQueue(largeQ, queue);

    return queue;
};

const parkVehicle = (parker, lot, vehicle) => {
    return ParkingLot.placeVehicle(lot, vehicle);
};


const parkQueue = (parker, lot, queue) => {
    // TODO: write implementation
};


const releaseVehicle = (parker, lot) => {
    if (ParkingLot.isContainsVehicles(lot)) return ParkingLot.releaseVehicle(lot);
    else return Vehicle.makeAbsent();
};

module.exports = {
    makeParker: make,

    sortQueue: sortQueue,
    parkVehicle: parkVehicle,
    releaseVehicle: releaseVehicle
};