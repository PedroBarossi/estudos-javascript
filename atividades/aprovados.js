/*-Criar uma função que receba o array alunos e um número que represente a média final
-Percorrer o array e popule um novo array auxiliar apenas com alunos cujas notas são maiores ou iguais à média
-desconstruir o objeto para manipular as propriedades
*/
function separarAprovados(array, media) {
    let aprovados = [];

    for(let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if (nota >= media) aprovados.push(nome);
    }

    return aprovados;
}

let alunos = [
    {
        nome: "Mônica",
        nota: 8,
        turma: "1B",
    },
    {
        nome: "Cebolinha",
        nota: 7,
        turma: "2C",
    },
    {
        nome: "Cascão",
        nota: 5,
        turma: "1B",
    },
    {
        nome: "Magali",
        nota: 6,
        turma: "2C",
    },
];

console.log(separarAprovados(alunos, 7));