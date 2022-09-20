function sum2(num1, num2, num3) {
   
    let ans = num1 + num2 +num3;
  
    //helps the function to expose something out of its self ie "num1 value"
   // return num1; 

     console.log(ans);
}
sum2(20, 30, 0);
sum2(200, 300, 400);




//######################################################################################################################################################
//paye
//dynamic functions, gross and tax are parameters or formal urguments.
//all functions are self-contained.function paye(gross, tax) {
   
    var netPay = gross-(gross*tax);
  
    //helps the function to expose something out of its self ie "num1 value"
   // return num1; 
//a return statement marks the end of excecution/
     console.log(netPay);
//}
paye(200000, 0.200);
paye(800000, 0.300000);




function sum() {
    let num1 = 20;
    let num2 = 30;
    let ans = num1 + num2;
  
    //helps the function to expose something out of its self ie "num1 value"
   // return num1; 

     console.log(ans);
}
sum();

//console.log(####################################################################################);

function netPay() {

    var gross = 2000000;
    var tax = gross * 0.3;
    var net_pay = gross - tax;
    return net_pay;
  //  console.log(net_pay);
    
}
//netPay();
//console.log(netPay());

function welFare(){

    var wel_fare = 50000;
    var takeHome = netPay() - wel_fare;
    console.log(takeHome);
    
}
welFare();

//assignment
//define 3 parametarized infuctions that call one another.
function netPay() {

    var gross = 2000000;
    var tax = gross * 0.3;
    var net_pay = gross - tax;
    return net_pay;
  //  console.log(net_pay);
    
}function welFare(){

    var wel_fare = 50000;
    var takeHome = netPay() - wel_fare;
    console.log(takeHome);
    
}
welFare();