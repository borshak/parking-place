// Traffic Queue ATD

const Vehicle = require('../vehicle/implementation');

const make = () => {
    return {
        QUEUE: []
    };
};

const getSize = (queue) => {
    return queue.QUEUE.length;
};

const isEmpty = (queue) => {
    return !!(getSize(queue));
};

const toString = (queue) => {
    const newLine = '\n';
    let result = '';
    // TODO: write implementation
    return result;
};

module.export = {
    makeQueue: make,
    isEmpty: isEmpty,
    toString: toString
};