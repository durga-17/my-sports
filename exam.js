const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter the marks", function(input){
    let number=Number(input);

    if(number>35){
        console.log("passed");
    }
    else if(number>80){
        console.log("first rank");
    }
    else{
        console.log("failed");
    }
    rl.close();
})