const ParkingLot = require('../../js/parking-lot/interface');
// const ParkingSpot = require('../../js/parking-spot/interface');
const Vehicle = require('../../js/vehicle/interface');

test('New lot do not contains any vehicles', () => {

    const pl_1 = ParkingLot.makeLot();
    const pl_2 = ParkingLot.makeLot({
        SMALL: 2
    });
    const pl_3 = ParkingLot.makeLot({
        MEDIUM: 3
    });
    const pl_4 = ParkingLot.makeLot({
        LARGE: 3
    });
    const pl_5 = ParkingLot.makeLot({
        SMALL: 8,
        MEDIUM: 9,
        LARGE: 10
    });

    expect(ParkingLot.isContainsVehicles(pl_1)).toBe(false);
    expect(ParkingLot.isContainsVehicles(pl_2)).toBe(false);
    expect(ParkingLot.isContainsVehicles(pl_3)).toBe(false);
    expect(ParkingLot.isContainsVehicles(pl_4)).toBe(false);
    expect(ParkingLot.isContainsVehicles(pl_5)).toBe(false);
});

test('Lot with vehicles do contains vehicles', () => {

    const pl_1 = ParkingLot.makeLot({
        SMALL: 8,
        MEDIUM: 9,
        LARGE: 10
    });

    const v1 = Vehicle.makeMedium();

    ParkingLot.placeVehicle(pl_1, v1);

    expect(ParkingLot.isContainsVehicles(pl_1)).toBe(true);
});

test('Lot that was released from vehicles do not contains vehicles', () => {

    const pl_1 = ParkingLot.makeLot({
        SMALL: 8,
        MEDIUM: 9,
        LARGE: 10
    });

    const v1 = Vehicle.makeMedium();
    const v2 = Vehicle.makeLarge();

    expect(ParkingLot.isContainsVehicles(pl_1)).toBe(false);

    ParkingLot.placeVehicle(pl_1, v1);
    ParkingLot.placeVehicle(pl_1, v2);

    expect(ParkingLot.isContainsVehicles(pl_1)).toBe(true);

    ParkingLot.releaseVehicle(pl_1);

    expect(ParkingLot.isContainsVehicles(pl_1)).toBe(true);

    ParkingLot.releaseVehicle(pl_1);

    expect(ParkingLot.isContainsVehicles(pl_1)).toBe(false);
});