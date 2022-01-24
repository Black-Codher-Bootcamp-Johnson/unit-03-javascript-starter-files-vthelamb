// ****************************************************TASK 1 - OBJECTS****************************************************
let personA = {
    name: 'Jack',
    age:    30,
    location: 'England',
    likes: 'kittens'
}

let personB ={
    name: 'Joyce',
    age: 35,
    location: 'Portugal',
    likes: 'music'
}

let personC={
    name: 'Valeria',
    age: 35,
    location: 'Brazil',
    likes: 'pets'
}

let personD ={
    name: 'Maria',
    age: 28,
    location: "England",
    likes: 'food'
}

function biography(person){
    console.log(person)
    return 'Hi, my name is '+person.name+'. I am '+person.age+' years old, I live in '+person.location+
    ' and I like '+person.likes+'!'
}

console.log(biography(personA));
 
// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;
const a = 8;
const b = 9;
const c = 2;
const addition = x + y;

console.log("Addition: x + y = " + addition);

const subtraction = b - y;

console.log('Subtraction: b - y = ' + subtraction);

const multiplication = y * c;

console.log("Multiplication: y * c = " + multiplication);

const division = a * c;

console.log("Division: x + y = " + division);


// ****************************************************TASK 3****************************************************
const myAge = 18;
const minAge = 18;

const EnoughDrive = (myAge) >= minAge;

console.log('I am old enough to drive! ' + EnoughDrive)














