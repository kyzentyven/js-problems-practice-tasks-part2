// inch to feet
// 12 inch = 1 feet
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const heightOfTuhin = inchToFeet(66);
console.log(heightOfTuhin);

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch. ';
    return result;
}

const heightOfGhost = inchToFeet2(90);
console.log(heightOfGhost);

// mile to kilometre
function mileToKilometre(mile){
    const kilometre = mile * 1.60934;
    return kilometre;
}

console.log(mileToKilometre(10));

// kilometre to mile
function kilometreToMile(kilometre){
    const mile = kilometre * 0.621371;
    return mile;
}

console.log(kilometreToMile(10));