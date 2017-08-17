// Import
const Vehicle = require('./vehicle/interface');
// const ParkingSpot = require('./parking-spot/interface');
const TrafficQueue = require('./traffic-queue/interface');
const ParkingLot = require('./parking-lot/interface');
const CarParker = require('./car-parker/interface');


// Entry point
const parking = ParkingLot.makeLot({
    DESCRIPTION: '#13',
    SMALL: 0,
    MEDIUM: 0,
    LARGE: 4
});

const v_s_1 = Vehicle.makeSmall('Zaporogetz ZAZ-50');
const v_s_2 = Vehicle.makeSmall('Daewoo Lanos');
const v_s_3 = Vehicle.makeSmall('Volinetz');

const v_m_1 = Vehicle.makeMedium('Mercedes CLS-300');
const v_m_2 = Vehicle.makeMedium('Pegoe BUSik');
const v_m_3 = Vehicle.makeMedium('Mitsubishi Pagero');

const v_l_1 = Vehicle.makeLarge('KAMAZ');
const v_l_2 = Vehicle.makeLarge('Ural');
const v_l_3 = Vehicle.makeLarge('Ikarus');

// Queue
const tq1 = TrafficQueue.makeQueue('Q1');

TrafficQueue.addToTail(tq1, v_l_1);
TrafficQueue.addToTail(tq1, v_s_1);
TrafficQueue.addToTail(tq1, v_m_1);
TrafficQueue.addToTail(tq1, v_l_2);
TrafficQueue.addToTail(tq1, v_l_3);
TrafficQueue.addToTail(tq1, v_m_2);
TrafficQueue.addToTail(tq1, v_s_2);
TrafficQueue.addToTail(tq1, v_m_3);
TrafficQueue.addToTail(tq1, v_s_3);

// console.log(TrafficQueue.toString(tq1));

const p1 = CarParker.makeParker('Sam');
CarParker.sortQueue(p1, tq1);

// console.log(TrafficQueue.toString(tq1));



console.log(ParkingLot.toString(parking));
console.log(ParkingLot.isContainsVehicles(parking));

ParkingLot.placeVehicle(parking, v_s_1);

console.log(ParkingLot.toString(parking));
console.log(ParkingLot.isContainsVehicles(parking));

const v_r = ParkingLot.releaseVehicle(parking);
console.log(ParkingLot.toString(parking));
console.log(ParkingLot.isContainsVehicles(parking));
console.log(Vehicle.toString(v_r));




// const v1 = Vehicle.makeMedium('Volga Gaz-24');
// const v2 = Vehicle.makeMedium('Mercedes CLX-300');
// const v3 = Vehicle.makeLarge('KRAZ');
// // console.log(Vehicle.toString(v1));
// // console.log(Vehicle.toString(v2));
// // console.log(Vehicle.toString(v3));
//
// const tq1 = TrafficQueue.makeQueue('Q1');
// const tq2 = TrafficQueue.makeQueue('Q2');
// console.log(TrafficQueue.toString(tq1));
//
// TrafficQueue.addToTail(tq1, v1);
// TrafficQueue.addToTail(tq1, v2);
// TrafficQueue.addToTail(tq1, v3);
// console.log(TrafficQueue.toString(tq1));
//
// TrafficQueue.addToTail(tq2, TrafficQueue.releaseFromHead(tq1));
// TrafficQueue.addToTail(tq2, TrafficQueue.releaseFromHead(tq1));
//
// console.log(TrafficQueue.toString(tq1));
// console.log(TrafficQueue.toString(tq2));
