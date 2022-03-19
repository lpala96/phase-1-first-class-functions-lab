// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
function returnFirstTwoDrivers() {
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers() {
    return drivers.slice(2, 4);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function () {
        return number*number;
    }
}
const fareDoubler = fare => fare*2
const fareTripler = fare => fare*3

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
    
}