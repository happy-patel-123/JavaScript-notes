const AccountId = 123;
let AccountName = "Kobe Bryant";
var AccountEmail = "kobe@gmail.com"; 
accountCity = "Banglore"

let AccountPwd; //undefined 

console.log(AccountId);

console.table([AccountId, AccountName, AccountEmail, accountCity, AccountPwd])

/*
    Prefer not to use var
    Due to issue in functional & block scope
*/