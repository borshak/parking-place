// Traffic Queue ATD

const Vehicle = require('../vehicle/implementation');

// Constructor
const make = () => {
    return {
        QUEUE: []
    };
};


// Selectors
const getSize = (queue) => {
    return queue.QUEUE.length;
};


// Predicates
const isEmpty = (queue) => {
    return !(getSize(queue));
};

const isContainsVehicles = (queue) => {
    return !isEmpty(queue);
};


// Mutators
const enqueue = (queue, vehicle) => {
    if (Vehicle.isExist(vehicle)) {
        queue.QUEUE.push(vehicle);
        return true;
    } else {
        return false;
    }
};

const dequeue = (queue) => {
    if (isContainsVehicles(queue)) {
        const vehicle = queue.QUEUE.shift();
        return vehicle;
    } else {
        return Vehicle.makeAbsent();
    }
};


const toString = (queue) => {
    const newLine = '\n';
    let result = '';

    result += `Queue:${newLine}`;
    result += `------${newLine}`;
    queue.QUEUE.map((vehicle) => {
        result += `${Vehicle.toString(vehicle)} ${newLine}`;
    });
    result += `${newLine}`;

    return result;
};

module.exports = {
    makeQueue: make,

    isEmpty: isEmpty,
    isContainsVehicles: isContainsVehicles,

    addToTail: enqueue,
    releaseFromHead: dequeue,

    toString: toString
};