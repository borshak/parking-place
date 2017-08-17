const Vehicle = require('./implementation');

module.exports = {
    makeAbsent: Vehicle.makeAbsent,
    makeSmall: Vehicle.makeSmall,
    makeMedium: Vehicle.makeMedium,
    makeLarge: Vehicle.makeLarge,

    getDescription: Vehicle.getDescription,

    isNotExist: Vehicle.isNotExist,
    isExist: Vehicle.isExist,
    isSmall: Vehicle.isSmall,
    isMedium: Vehicle.isMedium,
    isLarge: Vehicle.isLarge,

    toString: Vehicle.toString
};