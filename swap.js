// Swap with temp
let a = 5;
let b = 7;
console.log(a, b);

// a = b;
// b = a;

const temp = a;
a = b;
b = temp;
console.log(a, b);

//  Swap without temp
let x = 5;
let y = 7;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);