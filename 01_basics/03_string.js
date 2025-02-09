const userId = 'ram1234';

const userName = new String('Ram is a good boy.');
//console.log(pwd);

console.log(userName.toUpperCase()); //RAM
console.log(userName[1]); // get the index of char: o/p -> a

console.log(userName.charAt(2)); //charater at index: o/p -> m
console.log(userName.indexOf('good')); //returns index -> 9

console.log(userName.concat(' ', userId)); //Join the string

console.log(userName.includes('is')); //checks if it includes

console.log(userName.replace('Ram', userId)); //replaces the string

console.log(userName.split(" ")); //splits & converts to array

console.log(userName.slice(3,9)); //gives middle values
console.log(userName.slice(-5)); 

console.log(userId.padStart(userName.length-1,"*")); //Like a password
