//loops include "For loop" "while loop" "switch"

//for (var item = 0; item <= 10; item++){
   // console.log(item);
//}
//for loop
function firstLoop() {
    for (var item = 0; item <= 10; ++item) {
        console.log(item);
    }
}
//infinite  for loop

//var num = 0;
function secondLoop() {
    let num = 0;
    for (let num = 0; num <= 20; num++) {
        // console.log(num);
        // if (num % 2 != 0)
        if (num % 2 != 0) {
            console.log(num);
        }
    }
    console.log(num);
}
//while loop

//function call
//firstLoop();
secondLoop();