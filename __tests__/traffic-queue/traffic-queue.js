const TrafficQueue = require('../../js/traffic-queue/interface');
const Vehicle = require('../../js/vehicle/interface');

test('New traffic queue is empty', () => {
    const q1 = TrafficQueue.makeQueue();

    expect(TrafficQueue.isEmpty(q1)).toBe(true);
    expect(TrafficQueue.isContainsVehicles(q1)).toBe(false);
});

test('Vehicle, released from queue, is the same vehicle', () => {
    const q1 = TrafficQueue.makeQueue();
    const v_s = Vehicle.makeSmall('ZAZ');

    TrafficQueue.addToTail(q1, v_s);
    const v_r = TrafficQueue.releaseFromHead(q1);

    expect(Vehicle.isSmall(v_r)).toBe(true);
    expect(Vehicle.getDescription(v_r)).toBe('ZAZ');
});

test('Test queue process', () => {
    const q1 = TrafficQueue.makeQueue();
    const v_s = Vehicle.makeSmall('');
    const v_m = Vehicle.makeMedium('');
    const v_l = Vehicle.makeLarge('');

    // Empty
    expect(TrafficQueue.isEmpty(q1)).toBe(true);
    expect(TrafficQueue.isContainsVehicles(q1)).toBe(false);

    // 1 vehicle
    TrafficQueue.addToTail(q1, v_s);
    expect(TrafficQueue.isContainsVehicles(q1)).toBe(true);
    expect(TrafficQueue.isEmpty(q1)).toBe(false);

    // 2 vehicle
    TrafficQueue.addToTail(q1, v_m);
    expect(TrafficQueue.isContainsVehicles(q1)).toBe(true);
    expect(TrafficQueue.isEmpty(q1)).toBe(false);

    // 3 vehicle
    TrafficQueue.addToTail(q1, v_l);
    expect(TrafficQueue.isContainsVehicles(q1)).toBe(true);
    expect(TrafficQueue.isEmpty(q1)).toBe(false);

    // 2 vehicle (1 released)
    TrafficQueue.releaseFromHead(q1);
    expect(TrafficQueue.isContainsVehicles(q1)).toBe(true);
    expect(TrafficQueue.isEmpty(q1)).toBe(false);

    // 1 vehicle
    TrafficQueue.releaseFromHead(q1);
    expect(TrafficQueue.isContainsVehicles(q1)).toBe(true);
    expect(TrafficQueue.isEmpty(q1)).toBe(false);

    // Empty
    TrafficQueue.releaseFromHead(q1);
    expect(TrafficQueue.isContainsVehicles(q1)).toBe(false);
    expect(TrafficQueue.isEmpty(q1)).toBe(true);
});
