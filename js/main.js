const Vehicle = require('./vehicle/vehicle');

const main = () => {
    return `MAIN`;
};

console.log(main());

const v1 = Vehicle.makeMediumVehicle('Volga Gaz-24');

console.log(Vehicle.toString(v1));

// module.exports = {
//     main: main
// };