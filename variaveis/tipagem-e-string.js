//tipagem dinâmica
let um = "um"; //string
console.log(typeof(um));
um = 1;
console.log(typeof(um)); //number

//string
const DIO = "I reject my humanity, JoJo!!";
let firstName = "Dino";
let lastName = "da Silva Sauro";

let fullName = `Nome completo: ${firstName} ${lastName}`;
let nome = "Patrício";
let sobrenome = "Poéto";
let concatenado = nome.concat(sobrenome);
console.log(concatenado.length);
let exemplo = new String("Biro-Biro");
console.log(typeof(concatenado)); //string
console.log(typeof(exemplo)); //object
let vazio = "";
console.log(typeof(vazio)); //ainda vazio é uma string
console.log(nome[1]); //"a" é o índice 1 (começa do 0)
concatenado = nome + " " + sobrenome;
console.log(concatenado);
concatenado = nome + "\n" + sobrenome;
console.log(concatenado);
concatenado = `${nome}


${sobrenome}`;
console.log(concatenado);
let frase = "Esse é seu dia de sorte!";
console.log(frase.split(" "));
console.log(frase.includes("dia"));
console.log(frase.startsWith("F"));
console.log(frase.endsWith("!"));
let novafrase = frase.replace("!", "?");