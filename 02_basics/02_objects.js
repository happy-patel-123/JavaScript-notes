// create object
const JUser= {
    name: "happy",     //name becomes "name" (key becomes string in object)
    age: 12,
    location: "Ahmedaabd",
    isLogged: true,
    "json_name": "happy patel",
    parents:{
        mom: "Mum",
        dad: "Dad"
    }
}

// extract data
console.log(JUser.name);
console.log(JUser["json_name"]); //ONLY WAY to get data from json

console.log(JUser.parents?.dad); //get data from api

console.log(Object.keys(JUser)); // returns array of keys : ["name", "age", ...]
console.log(Object.values(JUser));

console.log(JUser.hasOwnProperty('isLogged')); //if key exists


// Merge two objects
const obj1= { 1: "a", 2: "b" }
const obj2= { 3: "a", 4: "b" }

const obj3= {...obj1, ...obj2}




