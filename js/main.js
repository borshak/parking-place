// Import
const Vehicle = require('./vehicle/interface');
// const ParkingSpot = require('./parking-spot/interface');
const TrafficQueue = require('./traffic-queue/interface');
const ParkingLot = require('./parking-lot/interface');
const CarParker = require('./car-parker/interface');

const fillQueue = (queue, arrayOfVehicles) => {
    arrayOfVehicles.map((vehicle) => {
        TrafficQueue.addToTail(queue, vehicle);
    });
};


//////////////
// ENTRY POINT
//////////////

// Vehicles
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
const queue = TrafficQueue.makeQueue('Q1');

// Parker
const parker = CarParker.makeParker('Sam');

const lot = ParkingLot.makeLot({
    DESCRIPTION: '#13',
    SMALL: 2,
    MEDIUM: 1,
    LARGE: 4
});

const vehiclesArray = [
    v_l_1,
    v_l_2,
    v_m_1,
    v_m_2,
    v_m_3,
    v_s_1,
    v_s_2,
    v_s_3,
    v_l_3
];

// Filled queue
fillQueue(queue, vehiclesArray);
console.log(TrafficQueue.toString(queue));

// Sorted queue
// CarParker.sortQueue(parker, queue);
// console.log(TrafficQueue.toString(queue));

// Park queue into lot
CarParker.parkQueue(parker, lot, queue);
console.log(ParkingLot.toString(lot));
console.log(TrafficQueue.toString(queue));

// Release whole lot
// const newQueue = CarParker.releaseWholeLot(parker, lot);
// console.log(ParkingLot.toString(lot));
// console.log(TrafficQueue.toString(newQueue));

