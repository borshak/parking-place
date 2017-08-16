const ParkingSpot = require('../../js/parking-spot/interface');
const Vehicle = require('../../js/vehicle/interface');

test('New parking spot is empty', () => {
    const ps_s = ParkingSpot.makeSmall();
    const ps_m = ParkingSpot.makeMedium();
    const ps_l = ParkingSpot.makeLarge();

    expect(ParkingSpot.isEmpty(ps_s)).toBe(true);
    expect(ParkingSpot.isEmpty(ps_m)).toBe(true);
    expect(ParkingSpot.isEmpty(ps_l)).toBe(true);
});

test('New parking spot is not contain vehicles', () => {
    const ps_s = ParkingSpot.makeSmall();
    const ps_m = ParkingSpot.makeMedium();
    const ps_l = ParkingSpot.makeLarge();

    expect(ParkingSpot.isContainsVehicle(ps_s)).toBe(false);
    expect(ParkingSpot.isContainsVehicle(ps_m)).toBe(false);
    expect(ParkingSpot.isContainsVehicle(ps_l)).toBe(false);
});

test('Each type of parking spot has correct size', () => {
    const ps_s = ParkingSpot.makeSmall();
    const ps_m = ParkingSpot.makeMedium();
    const ps_l = ParkingSpot.makeLarge();

    expect(ParkingSpot.isSmall(ps_s)).toBe(true);
    expect(ParkingSpot.isMedium(ps_m)).toBe(true);
    expect(ParkingSpot.isLarge(ps_l)).toBe(true);
});

test('Small parking spot is neither medium nor large', () => {
    const ps1 = ParkingSpot.makeSmall();
    expect(ParkingSpot.isMedium(ps1)).toBe(false);
    expect(ParkingSpot.isLarge(ps1)).toBe(false);
});

test('Medium parking spot is neither small nor large', () => {
    const ps1 = ParkingSpot.makeMedium();
    expect(ParkingSpot.isSmall(ps1)).toBe(false);
    expect(ParkingSpot.isLarge(ps1)).toBe(false);
});

test('Large parking spot is neither small nor medium', () => {
    const ps1 = ParkingSpot.makeLarge();
    expect(ParkingSpot.isSmall(ps1)).toBe(false);
    expect(ParkingSpot.isMedium(ps1)).toBe(false);
});

test('Each type of parking spot fit the correspond type of vehicle', () => {
    const ps_s = ParkingSpot.makeSmall();
    const ps_m = ParkingSpot.makeMedium();
    const ps_l = ParkingSpot.makeLarge();

    const v_s = Vehicle.makeSmall('');
    const v_m = Vehicle.makeMedium('');
    const v_l = Vehicle.makeLarge('');

    expect(ParkingSpot.isFitToVehicle(ps_s, v_s)).toBe(true);
    expect(ParkingSpot.isFitToVehicle(ps_s, v_m)).toBe(false);
    expect(ParkingSpot.isFitToVehicle(ps_s, v_l)).toBe(false);

    expect(ParkingSpot.isFitToVehicle(ps_m, v_s)).toBe(true);
    expect(ParkingSpot.isFitToVehicle(ps_m, v_m)).toBe(true);
    expect(ParkingSpot.isFitToVehicle(ps_m, v_l)).toBe(false);

    expect(ParkingSpot.isFitToVehicle(ps_l, v_s)).toBe(true);
    expect(ParkingSpot.isFitToVehicle(ps_l, v_m)).toBe(true);
    expect(ParkingSpot.isFitToVehicle(ps_l, v_l)).toBe(true);
});

test('Parking spot with vehicle is contains vehicle', () => {
    const ps_l = ParkingSpot.makeLarge();
    const v_s = Vehicle.makeSmall('');

    expect(ParkingSpot.isEmpty(ps_l)).toBe(true);
    expect(ParkingSpot.isContainsVehicle(ps_l)).toBe(false);

    expect(ParkingSpot.placeVehicle(ps_l, v_s)).toBe(true); // Place vehicle

    expect(ParkingSpot.isEmpty(ps_l)).toBe(false);
    expect(ParkingSpot.isContainsVehicle(ps_l)).toBe(true);
});

test('After release vehicle we have empty parking spot and vehicle', () => {
    const ps_l = ParkingSpot.makeLarge();
    const v_s = Vehicle.makeSmall('');

    expect(ParkingSpot.isEmpty(ps_l)).toBe(true);
    expect(ParkingSpot.isContainsVehicle(ps_l)).toBe(false);

    expect(ParkingSpot.placeVehicle(ps_l, v_s)).toBe(true); // Place vehicle

    const v_r = ParkingSpot.releaseVehicle(ps_l);

    expect(ParkingSpot.isEmpty(ps_l)).toBe(true);
    expect(ParkingSpot.isContainsVehicle(ps_l)).toBe(false);
    expect(Vehicle.isSmall(v_r)).toBe(true);
});


test('Small vehicle can be placed in any type of parking spot', () => {
    const ps_s = ParkingSpot.makeSmall();
    const ps_m = ParkingSpot.makeMedium();
    const ps_l = ParkingSpot.makeLarge();

    const v_s_1 = Vehicle.makeSmall('');
    const v_s_2 = Vehicle.makeSmall('');
    const v_s_3 = Vehicle.makeSmall('');

    expect(ParkingSpot.placeVehicle(ps_s, v_s_1)).toBe(true);
    expect(ParkingSpot.placeVehicle(ps_m, v_s_2)).toBe(true);
    expect(ParkingSpot.placeVehicle(ps_l, v_s_3)).toBe(true);
});

test('Medium vehicle can be placed only in medium or large type of parking spot', () => {
    const ps_s = ParkingSpot.makeSmall();
    const ps_m = ParkingSpot.makeMedium();
    const ps_l = ParkingSpot.makeLarge();

    const v_m_1 = Vehicle.makeMedium('');
    const v_m_2 = Vehicle.makeMedium('');
    const v_m_3 = Vehicle.makeMedium('');

    expect(ParkingSpot.placeVehicle(ps_s, v_m_1)).toBe(false);
    expect(ParkingSpot.placeVehicle(ps_m, v_m_2)).toBe(true);
    expect(ParkingSpot.placeVehicle(ps_l, v_m_3)).toBe(true);
});

test('Large vehicle can be placed only in large type of parking spot', () => {
    const ps_s = ParkingSpot.makeSmall();
    const ps_m = ParkingSpot.makeMedium();
    const ps_l = ParkingSpot.makeLarge();

    const v_l_1 = Vehicle.makeLarge('');
    const v_l_2 = Vehicle.makeLarge('');
    const v_l_3 = Vehicle.makeLarge('');

    expect(ParkingSpot.placeVehicle(ps_s, v_l_1)).toBe(false);
    expect(ParkingSpot.placeVehicle(ps_m, v_l_2)).toBe(false);
    expect(ParkingSpot.placeVehicle(ps_l, v_l_3)).toBe(true);
});