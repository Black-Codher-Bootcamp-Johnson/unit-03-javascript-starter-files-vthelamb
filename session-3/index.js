// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a = 5;
const b = 10;
let c = a + b;

console.log("Original output: " + c);

a = 20;

console.log("After 'a' has been updated: " + c)

function sayHey() {
    console.log ("Hey!");
}

sayHey ();

function conversation () {
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}
conversation ();

function futureAge(name,age) {
   const answer = age + 5;
    return name +" "+ "will be " + answer +  " in 5 years!";
}
console.log(futureAge("Veronica" , 30));