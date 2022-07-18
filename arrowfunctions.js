/*function sum(a, b){
    return a + b;
}
let sum2 = (a, b) => a + b; //Automatically assumes a return here

function isPositive(number){
    return number >= 0;
}
let isPositive2 = number => number >= 0;

function randomNumber(){
    return Math.random;
}
let randomNumber2 = () => Math.random;
*/
/*
document.addEventListener("click", function(){
    console.log("Click");
})
document.addEventListener("click", () => console.log("Click"));
*/
/*
class Person{
    constructor(name){
        this.name = name;
    }

    printNameArrow(){
        setTimeout(() => {
            console.log("Arrow: " + this.name)
        }, 100)
    }

    printNameFunction(){
        setTimeout(function (){
            console.log("Function: " + this.name)
        }, 100)
    }
}

let person = new Person("Bob");
person.printNameArrow();        //The arrow function scopes "this.person" as local while normal functions use a global .this
person.printNameFunction();
console.log(this.name);

const helloWorldA = () => "Hello World"
console.log(helloWorldA());

const addA = (a, b) => a + b;
const result = addA(5, 6);
console.log(result);
*/

sum = (a, b) => a + b;
var result = sum(1, 2)
sum = (a, b) => a - b;
var result = sum(1, 2)
console.log(result);