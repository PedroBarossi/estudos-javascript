//let array: number[] = [1, 2, "3"]; *elimina tipagem dinâmica dos elementos do array
let array = [1, 2, "3"];
let numbers: number[] =[];
numbers[0] = 1;
numbers[1] = 2;
//numbers[2] = "3"; *nonono!
numbers[2] = 3;

//Tuples são arrays de tamanho e tipagem fixa
//1, "Pedro"
let user: [number, string] = [1, "Pedro"];

//Enum
//const tamanhoP = 1;
//const tamanhoM = 2;
//const tamanhoG = 3;

const enum Size { Pequeno = 1, Médio , Grande };
let mySize: Size = Size.Pequeno;
console.log(mySize);