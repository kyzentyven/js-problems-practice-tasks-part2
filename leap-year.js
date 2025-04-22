/*
 * Year will be a leap year if the year is divisible by 4
*/
function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const leapYear = isLeapYear(2025);
console.log(leapYear);

/*
 * 1. Those year that are not divisible by 100 and if those year are divisible by 4 then it will be a leap year
 * 2. If the year is divisible by 400, then it is a leap year.
*/
function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const leapYear2 = isLeapYear2(2100);
const leapYear3 = isLeapYear2(2400);
const leapYear4 = isLeapYear2(1900);
const leapYear5 = isLeapYear2(2052);

console.log(leapYear2, leapYear3, leapYear4, leapYear5);