var a = 1;
var b = 2;

if (a === 1) {
    var a = 11; //escopo global
    let b = 22; //escopo local (bloco if)

    console.log(a); //11
    console.log(b); //22
}

console.log(a); //11
console.log(b); //2

var firstName = "João";
var lastName = "Souza";

if(firstName === "João") {
    var firstName = "Pedro";
    let lastName = "Silva";

    console.log(firstName, lastName);
}

console.log(firstName, lastName);

//hoisting
numberOne = 1;

console.log(numberOne + 2);

//let NumberOne não funciona
var numberOne;

