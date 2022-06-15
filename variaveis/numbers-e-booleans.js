//Numbers
let num = 100;
num /= 5;
num += 3;
console.log(num); //23

if (num%2 == 1) console.log(num + " é ímpar");
else console.log(num + " é par");

let fiveByThree = 5/3;
console.log(Math.floor(fiveByThree)); //arredonda para 1
console.log(Math.ceil(fiveByThree)); //arredonda para 2
let percentString = "10%";
let percent = 10;
console.log(percent + "%"); //para imprimir porcentagem na tela

//Booleans
let validation = 3===0;
console.log(validation);
console.log(!validation);