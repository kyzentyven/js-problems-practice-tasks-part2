const today = new Date();
const date = new Date('2026-10-20');
console.log(date.getDate());
console.log(date.getMonth());

const specificDate = new Date(2050, 0, 25);
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));