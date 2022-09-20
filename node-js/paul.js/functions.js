//functions are self contained meaning values within the function can not be accessed
//outside the function
//function add
//defining a function
function add() {
    let num1 = 20;
    let num2 = 30;
    let ans = num1 + num2;
    console.log(ans);
    //helps the function to expose something out of its self ie "num1 value"
    return num1;  
    // console.log(ans);
}
//cant be called oustide the function
//console.log(ans);

//calling a function/ function invocation (to invoke the function)
add();  
// console.log(ans);
console.log(add());

// //funtion that outputs the numers btn 0-100 but in the multiples of 10
// function evenNumber() {
//     for (num = 0; num <= 100; num += 10) {
//         if (num % 2 == 0);
//         console.log(num);
//     }
// }
// evenNumber();


function netPay() {

    var gross = 1000000;
    var tax = 1000000 * 0.3;
    var net_pay = gross - tax;
    return net_pay;
    
}
console.log(netPay());

function welFare(){

    var wel_fare = 50000;
     var takeHome = netPay() - wel_fare;
    comsole.log(takeHome);
    
}