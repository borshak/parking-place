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
    const placed = ParkingLot.placeVehicle(lot, vehicle);

    if (placed) {
        return true;
    }

    return false;
};


const parkQueue = (parker, lot, queue) => {
    const placeQueue = (lot, queue, tempQueue) => {
        while (TrafficQueue.isContainsVehicles(queue)) {
            const vehicle = TrafficQueue.releaseFromHead(queue);
            const placed = parkVehicle(parker, lot, vehicle);
            if (!placed) TrafficQueue.addToTail(tempQueue, vehicle);
        }
    };

    const moveBackFromTempQueue = (tempQueue, queue) => {
        while (TrafficQueue.isContainsVehicles(tempQueue)) {
            const vehicle = TrafficQueue.releaseFromHead(tempQueue);
            TrafficQueue.addToTail(queue, vehicle);
        }
    };

    const isAllVehiclesPlaced = (queue) => {
        return TrafficQueue.isEmpty(queue);
    };

    const tempQueue = TrafficQueue.makeQueue();

    placeQueue(lot, queue, tempQueue);
    moveBackFromTempQueue(tempQueue, queue);

    return isAllVehiclesPlaced(queue);
};


const releaseVehicle = (parker, lot) => {
    if (ParkingLot.isContainsVehicles(lot)) return ParkingLot.releaseVehicle(lot);
    else return Vehicle.makeAbsent();
};

const releaseWholeLot = (parker, lot) => {
    const queue = TrafficQueue.makeQueue();
    while (ParkingLot.isContainsVehicles(lot)) {
        const vehicle = releaseVehicle(parker, lot);
        TrafficQueue.addToTail(queue, vehicle);
    }
    return queue;
};

module.exports = {
    makeParker: make,

    sortQueue: sortQueue,
    parkVehicle: parkVehicle,
    parkQueue: parkQueue,

    releaseVehicle: releaseVehicle,
    releaseWholeLot: releaseWholeLot
};