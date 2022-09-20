var num1 = 10;
if (num1 < 50) {
    consol.log ("you are underweight to donate blood")
}



let salary = 200000;
let PAYE = 30;
//if the salary is less than 300000, you arent taxable

if (salary < 300000) {
    console.log("you arent taxable");
}
if (salary > 300000) {
    console.log("you are taxable");
}

// the "else"clause  is used to contradict the if statement
let price1 = 2000;
if (price1 <= 2000) {
    console.log("this product is liable for VAT");
}
else {
    console.log("This product is not entittled to VAT");
}
//Nested if statement
const num3_constant = 0;
if (num3_constant >= 0){
    if (num3_constant == 0){
        console.log("Your number is 0");
    }
    else{
        console.log("your number is positive")
    };
}

else {
    console.log("your number is negative");
}
//if..elseif
var my_sal = 700000;
var your_sal = 700000;

if (my_sal > your_sal) {
    console.log("i am better than you!");
}
else if (my_sal < your_sal) {
    console.log("You are  better than me!");
}
else if (my_sal == your_sal) {
    console.log("We are equal!");
}