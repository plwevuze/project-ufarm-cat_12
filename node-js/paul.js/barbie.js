// var country = {
//     population: 12000000,
//     name : "Uganda",
//     size : 15000,
//     climate : "Tropical",
// }
//static function

function country(name , population, president, size, climate, continet) {

    this.name = name;
    this.president = president;
    this.population = population;
    this.size = size;
    this.climate = climate;
     this.continet= continet;

//the "." calls a method or a class
}
//23&24, we instatiated.
//an instance is a value of the class
let Country_1 = new country("Uganda \n",     12000000      , "Kyagulanyi_Robert \n",   15000    , "Tropical \n", "Africa \n")
let Country_2 = new country("Kenya \n", 134500000, "Ruto \n", 15067500, "summer\n", "Africa \n")
// "new"also called the  constractor that intitialises an intantiated nobject
var yr11 = "#----------Uganda-----------#"
console.log(yr11);
console.log(Country_1.name  + Country_1.population + Country_1.president + Country_1.size + Country_1.climate + Country_1.continet)
var yr22 = "#----------Kenya---------#"
console.log(yr22);
console.log(Country_2.name + Country_2.population + Country_2.president + Country_2.size + Country_2.climate)


function sum() {
    
}
//function alternative definition
let sum = () => {
    
}
//turned to an object
let baby = (name, weight, gender, DOB) => {
    this.babyName = name;
    this.babbyWeight = weight;
    this.babyGender = gender;
    this.babyDOB = DOB;  
}

//define 7 parameterised class with alteast 5 parameters
// using the < this > new woed and atleast 3 instances using the < new> keyword.by 4pm on github tomorrow