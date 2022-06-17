let array = [];

array.push(3);
array.push(2);
array.pop(); //2
array.push(2);
array.push(5);
array.shift(); //3
array.unshift(1);
console.log(array); //1, 2, 5

for(let c=0; c<array.length; c++){
    array[c]++;
}
console.log(array); //2, 3, 6
let tem3 = array.includes(3); //true
console.log(array.reverse()); //6, 3, 2

//Função Map
let vetor = [1, 2, 3, 4, 5];

let vetorDobro = vetor.map((item) => item * 2);
console.log(vetorDobro); //[2, 4, 6, 8, 10]

//Função Filter
let frutas = ["maçã fuji", "laranja", "abacaxi", "maçã verde"];

let macas = frutas.filter((fruta) => fruta.includes("maçã"));
console.log(macas); //["maçã fuji", "maçã verde"]