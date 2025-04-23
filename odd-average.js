function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 !== 0){
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const average = sum / count;
    return average;
}

const numbers = [22, 35, 4, 8, 9, 11, 10, 7, 66, 15, 21];
const average = oddAverage(numbers);

console.log('Average of the odd numbers: ', average);