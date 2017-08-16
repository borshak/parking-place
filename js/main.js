const Vehicle = require('./vehicle/vehicle');

const main = () => {
    return `MAIN`;
};

console.log(main());

const v1 = Vehicle.makeMedium('Volga Gaz-24');

console.log(Vehicle.toString(v1));
