const num = 500

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); //100.00

const otherNum = 123.45

console.log(otherNum.toPrecision(4)); //123.5

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// ++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //converts absolute : 4
console.log(Math.round(4.7)); //5
console.log(Math.ceil(4.7)); //5
console.log(Math.floor(4.7)); //4

console.log(Math.random()); // values between 0-1
console.log(Math.floor(Math.random()*10)+1); // 1 to 10

// Math.floor( Math.random() * (diff + 1) ) + min

