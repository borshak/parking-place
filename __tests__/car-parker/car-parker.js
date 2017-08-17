const Vehicle = require('../../js/vehicle/interface');
const TrafficQueue = require('../../js/traffic-queue/interface');
const ParkingLot = require('../../js/parking-lot/interface');
const CarParker = require('../../js/car-parker/interface');

test('After trying to sort empty queue it is empty', () => {
    const parker1 = CarParker.makeParker();
    const q1 = TrafficQueue.makeQueue();

    CarParker.sortQueue(parker1, q1);

    expect(TrafficQueue.isEmpty(q1)).toBe(true);
});


test('Car Parker sort Traffic Queue', () => {
    const parker1 = CarParker.makeParker();
    const q1 = TrafficQueue.makeQueue();

    const v_s = Vehicle.makeSmall('');
    const v_m = Vehicle.makeMedium('');
    const v_l = Vehicle.makeLarge('');

    TrafficQueue.addToTail(q1, v_l);
    TrafficQueue.addToTail(q1, v_s);
    TrafficQueue.addToTail(q1, v_m);

    CarParker.sortQueue(parker1, q1);

    // Queue containst vehicles
    expect(TrafficQueue.isContainsVehicles(q1)).toBe(true);

    // First vehicle is small
    expect(Vehicle.isSmall(TrafficQueue.releaseFromHead(q1))).toBe(true);

    // Next vehicle is medium
    expect(Vehicle.isMedium(TrafficQueue.releaseFromHead(q1))).toBe(true);

    // Next vehicle is large
    expect(Vehicle.isLarge(TrafficQueue.releaseFromHead(q1))).toBe(true);
});

test('Car Parker parked vehicle onto Lot', () => {
    const parker = CarParker.makeParker();
    const vehicle = Vehicle.makeSmall('');
    const lot = ParkingLot.makeLot({
        SMALL: 1
    });

    expect(CarParker.parkVehicle(parker, lot, vehicle)).toBe(true);
    expect(ParkingLot.isContainsVehicles(lot)).toBe(true);
});

test('Vehicle that was released from parking by Car Parker is vehicle', () => {
    const parker = CarParker.makeParker();
    const vehicle = Vehicle.makeMedium('Mercedes S-600');
    const lot = ParkingLot.makeLot({
        LARGE: 1
    });

    CarParker.parkVehicle(parker, lot, vehicle);
    expect(ParkingLot.isContainsVehicles(lot)).toBe(true);

    const v_r = CarParker.releaseVehicle(parker, lot);
    expect(ParkingLot.isContainsVehicles(lot)).toBe(false);
    expect(Vehicle.isMedium(v_r)).toBe(true);
});

test('Car Parker can not park vehicle onto busy lot', () => {
    const parker = CarParker.makeParker();
    const v_1 = Vehicle.makeMedium('Mercedes S-600');
    const v_2 = Vehicle.makeMedium('Mercedes S-600');
    const v_3 = Vehicle.makeMedium('ZAZ');
    const lot_1 = ParkingLot.makeLot();
    const lot_2 = ParkingLot.makeLot({
        LARGE: 1
    });


    expect(CarParker.parkVehicle(parker, lot_1, v_1)).toBe(false);
    expect(ParkingLot.isContainsVehicles(lot_1)).toBe(false);

    expect(CarParker.parkVehicle(parker, lot_2, v_2)).toBe(true);
    expect(ParkingLot.isContainsVehicles(lot_2)).toBe(true);

    expect(CarParker.parkVehicle(parker, lot_2, v_3)).toBe(false);
    expect(ParkingLot.isContainsVehicles(lot_2)).toBe(true);
});