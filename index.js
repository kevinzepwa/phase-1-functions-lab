// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    let distance = 42 - pickup;
    return (distance < 0) ? (distance * -1) : distance
}

function distanceFromHqInFeet(pickup){
    let distance = distanceFromHqInBlocks(pickup);
    return (distance * 264);
}

function distanceTravelledInFeet(start, destination){
    let distance = (264 * (destination - start));
    return (distance < 0) ? (distance * -1) : distance
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    return ((distance  < 400) ? 0 :
    ((distance >= 400) && (distance <2000)) ? truncateDecimals(((distance * 0.02) - (400 * 0.02)) * 100) / 100:
    ((distance >= 2000) && (distance <2500)) ? 25 :
    'cannot travel that far')
}

truncateDecimals = function (number) {
    return Math[number < 0 ? 'ceil' : 'floor'](number);
};
