// let a=10;
// let b=20;

// function Durga(){
//     console.log(a+b);
// }
// Durga();

// three types of scopes in the functions
// 1.global scopes
// 2.function scopes
// 3.block scopes

// -----------global scope-----------

// let a=100;
// var b=200;
// const c="durga";

// function Durga(){
//     console.log(a+b+c);
// }
// Durga();

// ----------function scope----------

// function Durga(){
//     let a=20;
//     var b=30;
//     console.log(a+b);
// }

// Durga();

// ---------block scope---------


var  tennis="sania";
let cricket="virat";
const ground="durga";

function Durga(){
    if(10<20){
        console.log(ground);
    }
    console.log(cricket);
}
Durga();