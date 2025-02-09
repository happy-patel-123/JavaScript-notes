const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.getFullYear());
console.log(date.toLocaleString());

//CREATE DATE
let createDate = new Date(2023, 0, 21, 13, 50, 50, 100);
console.log(createDate);
createDate = new Date("2020-12-21");
console.log(createDate);
createDate = new Date("01-12-2020");
console.log(createDate.toLocaleString());

// For mill-second (Comparison in date always happen in millisecond)
// 1h 20m 100s -> 10000ms
let TimeStamp = Date.now();  //returns ms number since 1970.
console.log(TimeStamp);

console.log(Math.floor(TimeStamp/1000)); //compare in seconds


// Only Get month or date
const newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); //because month is 0 -> jan, so on...

// MOST USEFUL
const final = newDate.toLocaleString('default', {
    hour: "numeric"
}) //Press Ctrl+space for options
console.log(final);
