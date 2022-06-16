//Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this (criar os próprios objetos)

//função dada
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoas = [
    {
        nome: "Solfieri",
        idade: 28,
    },
    {
        nome: "Bertram",
        idade: 40,
    },
    {
        nome: "Gennaro",
        idade: 56,
    },
];

console.log(calculaIdade.call(pessoas[0], 5)); //Solfieri terá 33

console.log(calculaIdade.apply(pessoas[2], [14])); //Gennaro terá 70