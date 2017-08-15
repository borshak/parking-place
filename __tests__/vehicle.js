const Vehicle = require('../js/vehicle/vehicle');

test('vehicle with medium size is medium', () => {
  const v1 = Vehicle.makeMediumVehicle('Volga Gaz-31');
  expect(Vehicle.isMedium(v1)).toBe(true);
});