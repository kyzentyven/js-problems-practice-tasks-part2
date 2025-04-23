const biryaniLover = ['Abul', 'Babul', 'Mofiz', 'Abul', 'Athar', 'Mofiz'];

const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryaniLover);
console.log(uniqueArray);

const uniqueArray2 = noDuplicate(numbers);
console.log(uniqueArray2);