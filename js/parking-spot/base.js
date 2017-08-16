// // Parking Spot ATD
//
// const Vehicle = require('../vehicle/vehicle');
//
// const SPOT_TYPE = {
//     SMALL: 'SMALL',
//     MEDIUM: 'MEDIUM',
//     LARGE: 'LARGE'
// };
//
//
// // Main constructor
// const make = (spotType) => {
//     return {
//         TYPE: spotType,
//         CONTENT: Vehicle.makeAbsent()
//     };
// };
//
//
// // Additional constructors
// const makeSmall = () => {
//     return make(SPOT_TYPE.SMALL);
// };
//
// const makeMedium = () => {
//     return make(SPOT_TYPE.MEDIUM);
// };
//
// const makeLarge = () => {
//     return make(SPOT_TYPE.makeLarge);
// };
//
// // Selectors
// const getType = (parkingSpot) => {
//     return parkingSpot.TYPE;
// };
//
// const getContent = (parkingSpot) => {
//     return parkingSpot.CONTENT;
// };
//
//
// // Predicats
// const isEmpty = (parkingSpot) => {
//     return Vehicle.isAbscent(ParkingSpot.getContent(parkingSpot));
// };
//
// const isContainsVehicle = (parkingSpot) => {
//     return !isEmpty(parkingSpot);
// };
//
// const isSmall = (parkingSpot) => {
//     return parkingSpot.gettype() === SPOT_TYPE.SMALL;
// };
//
// const isMedium = (parkingSpot) => {
//     return parkingSpot.gettype() === SPOT_TYPE.MEDIUM;
// };
//
// const isLarge = (parkingSpot) => {
//     return parkingSpot.gettype() === SPOT_TYPE.LARGE;
// };
//
// const isFitToVehicle = (parkingSpot, vehicle) => {
//     let result = false;
//
//     switch (true) {
//         case isLarge(parkingSpot):
//         case isMedium(parkingSpot) && (Vehicle.isMedium(vehicle) || Vehicle.isSmall(vehicle)):
//         case isSmall(parkingSpot) && Vehicle.isSmall(vehicle):
//             result = true;
//             break;
//
//         default:
//             result = false;
//             break;
//     }
//
//     return result;
// };
//
//
// // Mutators
// const placeVehicle = (parkingSpot, vehicle) => {
//     if (isEmpty(parkingSpot) && Vehicle.isExist(vehicle)) {
//         parkingSpot.CONTENT = vehicle;
//         return true;
//     } else {
//         return false;
//     }
// };
//
// const releaseVehicle= (parkingSpot) => {
//     if (isContainsVehicle(parkingSpot)) {
//         const vehicle = parkingSpot.getContent();
//         parkingSpot.CONTENT = Vehicle.makeAbsent();
//         return vehicle;
//     } else {
//         return Vehicle.makeAbsent();
//     }
// };
//
// // Serializing
// const toString = (parkingSpot) => {
//     return `[ SPOT - ${getType(parkingSpot)} ][ ${getContent(toString)} ] `;
// };
//
//
// module.exports = {
//     SPOT_TYPE: SPOT_TYPE,
//     make: make,
//     getType: getType,
//     getContent: getContent,
//     toString: toString
// };