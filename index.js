// Code your solution in this file!

const eso = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (drivers){
    let firstTwo = drivers.slice(0,2)
    return firstTwo
}

const returnLastTwoDrivers = function (drivers){
    let lastTwo = drivers.slice(-2)
    return lastTwo
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(multiplier){
    return function(fare){
        return fare*multiplier
    }

}

const double = createFareMultiplier(2)
const triple = createFareMultiplier(3)

function fareDoubler(fare){
    return double(fare)
}

function fareTripler(fare){
    return triple(fare)
}

function selectDifferentDrivers(drivers, cb){
    return cb(drivers)
}

