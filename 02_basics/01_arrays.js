const arr = [1,'happy',true];
// Methods : Push, Pop, Unshift, shift, includes, indexOf
// Rarely use shift or unshift as all the elements are moved. 

// Join Method 
const myArr = [1,2,3,4];
console.log(myArr);

const newArr = myArr.join()
console.log(newArr);   //converted to string


/* To Join two arrays (WE USE SPREAD Operator) */

//console.log(arr.join(myArr)); // 11,2,3,4happy1,2,3,4true (after every element)

// arr.push(myArr); 
// console.log(arr); // [ 1, 'happy', true, [ 1, 2, 3, 4 ] ]

// const concatArr = arr.concat(myArr);
// console.log(concatArr); // [ 1, 'happy', true, 1, 2, 3, 4 ] but we do not use it

const allArr = [...arr, ...myArr]; 
console.log(allArr); //More than 2 arrays


//Slice Method : New array formed
console.log(allArr.slice(0,3)); 
console.log(allArr.slice(-2)); 

// Splice Method : Original array chnaged
console.log(allArr.splice(0,3));
console.log(allArr.splice(0,3,"add item1", "add item..")); //can also add items


/* Take all data & convert to array --> LOOP toh array me hi hoti hai */
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hello"}));  //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));