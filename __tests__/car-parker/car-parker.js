const CarParker = require('../../js/car-parker/interface');
const TrafficQueue = require('../../js/traffic-queue/interface');
const Vehicle = require('../../js/vehicle/interface');

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


