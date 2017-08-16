const Vehicle = require('../../js/vehicle/interface');

test('Absent vehicle is not exist', () => {
    const v1 = Vehicle.makeAbsent();
    expect(Vehicle.isNotExist(v1)).toBe(true);
});

test('Vehicle that not absent is exist', () => {
    const v1 = Vehicle.makeSmall('Djiguli Vaz-06');
    expect(Vehicle.isExist(v1)).toBe(true);
});

test('Vehicle that not absent is exist', () => {
    const v1 = Vehicle.makeSmall('Djiguli Vaz-06');
    expect(Vehicle.isExist(v1)).toBe(true);
});

test('Vehicle that not absent return FALSE for predicate isNotExist', () => {
    const v1 = Vehicle.makeSmall('Djiguli Vaz-06');
    expect(Vehicle.isNotExist(v1)).toBe(false);
});

test('Absent vehicle return FALSE for predicate isExist', () => {
    const v1 = Vehicle.makeAbsent();
    expect(Vehicle.isExist(v1)).toBe(false);
});

test('Vehicle with medium size is medium', () => {
  const v1 = Vehicle.makeMedium('Volga Gaz-31');
  expect(Vehicle.isMedium(v1)).toBe(true);
});

test('Vehicle with small size not medium', () => {
    const v1 = Vehicle.makeSmall('Zaporogetz ZAZ');
    expect(Vehicle.isMedium(v1)).toBe(false);
});

test('Vehicle with small size not large', () => {
    const v1 = Vehicle.makeSmall('Zaporogetz ZAZ');
    expect(Vehicle.isLarge(v1)).toBe(false);
});