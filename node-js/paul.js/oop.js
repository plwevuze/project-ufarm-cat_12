//object oriented programing(oop)
//this is the concept or an idea that advocates programing based on real world objects
//concepts of class Vs objects
//object is an instance of the class
//objects have properties
//inheritance is the ability for the object of the class to take on some or all  the properties n methods of a super clsass(attributes)
//Abstraction- the level of representation or  hiyracy of the class
//pojymophosim- objects of the class taking on many forms
//Encapsulation-ability to bundle/group data and methods that work on a specific data into a single object.

let dance = {
     style: "rhythm",
    temple: 5,
      name: "batterfly",
     music: "rnb",
       age: "30",
     type : "cultural",
}
//log() is a function that belongs to the console class
console.log(dance.name);
console.log(dance.style);

let school = {
    teachers: "56",
    students: "500",
    subjects: "10",
   buildings:"4",
       namez:"green",


}
//objects have behaviors and methods
//methods define wat an object does to itself or to others

//this-keyword used to identify the property of an object


var year1 = "##########-------Cars---------########"
console.log(year1);
function Car(name, model, chNo, seatCap)
{
    this.name = name;
    this.model = model;
    this.chNo = chNo;
    this.seatCap = seatCap;
}
let Car_1 = new Car("Subaru", 2010, "x1112", 5)
let Car_2 = new Car("Benz", 2020, "x10082", 6)
console.log(Car_1)
console.log(Car_2)

var year1 = "##########-------Books---------########"
console.log(year1);
//books
//instatiate an object in the class book
function book(name, author, sNum ,year)
{
    this.name = name;
    this.author = author;
    this.sNum = sNum;
    this.year = year;
   
}

let fbook = new book("Subaru", "Zainab", "x1112", 2015)
let sbook = new book("Benz", "Peter", "x10082", 2019)
let tbook = new book("Jeep", "Paul", "x10082", 2020)

var yr11 = "#Books_Subaru#"
console.log(yr11);
console.log(fbook.name)
console.log(fbook.author)
console.log(fbook.sNum)
console.log(fbook.year)
console.log(fbook.name + fbook.author + fbook.sNum + fbook.year)

var yr12 = "#Books_Benz#"
console.log(yr12);
console.log(sbook)

var yr13 = "#Books_Jeep#"
console.log(yr13);
console.log(tbook)
