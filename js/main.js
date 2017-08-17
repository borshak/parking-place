const Vehicle = require('./vehicle/interface');
const ParkingSpot = require('./parking-spot/interface');

const TrafficQueue = require('./traffic-queue/interface');

const v1 = Vehicle.makeMedium('Volga Gaz-24');
const v2 = Vehicle.makeMedium('Mercedes CLX-300');
const v3 = Vehicle.makeLarge('KRAZ');
// console.log(Vehicle.toString(v1));
// console.log(Vehicle.toString(v2));
// console.log(Vehicle.toString(v3));

const tq1 = TrafficQueue.makeQueue('Q1');
const tq2 = TrafficQueue.makeQueue('Q2');
console.log(TrafficQueue.toString(tq1));

TrafficQueue.addToTail(tq1, v1);
TrafficQueue.addToTail(tq1, v2);
TrafficQueue.addToTail(tq1, v3);
console.log(TrafficQueue.toString(tq1));

TrafficQueue.addToTail(tq2, TrafficQueue.releaseFromHead(tq1));
TrafficQueue.addToTail(tq2, TrafficQueue.releaseFromHead(tq1));

console.log(TrafficQueue.toString(tq1));
console.log(TrafficQueue.toString(tq2));
