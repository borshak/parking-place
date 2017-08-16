// const Vehicle = require('./vehicle/vehicle');
const Vehicle = require('./vehicle/interface');
const ParkingSpot = require('./parking-spot/interface');

const v1 = Vehicle.makeMedium('Volga Gaz-24');
console.log(Vehicle.toString(v1));


const ps1 = ParkingSpot.makeMedium();
console.log(ParkingSpot.toString(ps1));

ParkingSpot.placeVehicle(ps1, v1);
console.log(ParkingSpot.toString(ps1));

const rv = ParkingSpot.releaseVehicle(ps1);
console.log('--');
console.log(Vehicle.toString(rv));
console.log(ParkingSpot.toString(ps1));