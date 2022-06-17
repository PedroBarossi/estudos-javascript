//Pratique a sintaxe de multiplicação com Map uma vez utilizando o parâmetro this e uma vez sem ele
const SEQ_FIBONACCI = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

let dobro = {
    multiplicador: 2,
}

let triplo = {
    multiplicador: 3,
}

function multiplicarMap(array, thisArg) {
    return array.map(function (valor) {
        return valor * this.multiplicador;
    }, thisArg);
}

console.log(multiplicarMap(SEQ_FIBONACCI, dobro)); //usando this
console.log(multiplicarMap(SEQ_FIBONACCI, triplo));
let quadruplo = SEQ_FIBONACCI.map((valor) => valor*4); //sem usar this

console.log(quadruplo);

//Filtre e retorne todos os números pares de um array
console.log(SEQ_FIBONACCI.filter((valor) => valor%2 === 0));

//Some todos os números de um array utilizando Reduce
console.log(SEQ_FIBONACCI.reduce((previous, current) => previous + current));

/*Crie uma função que:
-receba uma lista de preços e um número representando o saldo disponível;
-calcule qual será o saldo final após subtrair todos os preços da lista enviada.*/

const CARTAO_DE_CREDITO = [
    {
        nome: "notebook",
        valor: 295.95,
    },
    {
        nome: "sapatos",
        valor: 34.39,
    },
    {
        nome: "material de estudo",
        valor: 54.75,
    },
    {
        nome: "remédio",
        valor: 19.99,
    },
];
const SALDO_DO_MES = 890.42;
const FATOR_DE_CORRECAO = 10;

console.log("Após pagar tudo, restará R$" + CARTAO_DE_CREDITO.reduce((previous, current) => (previous * FATOR_DE_CORRECAO - current.valor * FATOR_DE_CORRECAO) / FATOR_DE_CORRECAO, SALDO_DO_MES));