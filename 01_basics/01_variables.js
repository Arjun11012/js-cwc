const accountId = 144553
let accountEmail = "arjun@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// investigation tarike se padhai

// accountId = 2 // not allowed

accountEmail = "ak@ak.com"
accountPassword = "12121212"
accountCity = "Bengaluru"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
