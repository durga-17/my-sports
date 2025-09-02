// if
// else if
// else
// switch case
// this four are conditional statements.


// --------example 1----------
// var a=30;
// var b=30;

// if(a == b){
//     console.log("both are equal");
// }
// else if(a<b){
//     console.log("b is greater than a");
// }
// else{
//     console.log("a is bigger");
// }

// ------------exampla 2----------
let name = "John";   // directly assigning a name
let marks = 85;      // directly assigning marks
let result;

switch (true) {
    case marks > 90 && marks <= 100:
        result = "First Class";
        break;
    case marks > 80 && marks <= 90:
        result = "Second Class";
        break;
    case marks > 35 && marks <= 80:
        result = "Passed";
        break;
    default:
        result = "Fail";
        break;
}

console.log(`${name}, your result is: ${result}`);

