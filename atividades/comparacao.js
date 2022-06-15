/*
Crie uma função que:
-receba dois números como parâmetros;
-confira se esses números são iguais;
-confira se a soma deles é maior que 10 e menor que 20;
-imprima essas informações no console.
*/

//minha solução:
function exercicio(a, b) {
    if (a == null || b == null || a == undefined || b == undefined) { console.log("Erro, números inválidos!");
    } else {
        var iguais = a==b ? "são" : "não são";
        var soma = a+b;
        var maior10 = soma>10 ? "é maior" : "não é maior";
        var menor20 = soma<20 ? "é menor" : "não é menor";
        console.log("Os números foram " + a + " e " + b + ", que " + iguais + " iguais.");
        console.log("Sua soma é " + soma + ", que " + maior10 + " que 10 e " + menor20 + " que 20.");
    }
}

exercicio(3, 4);
exercicio(5, 5); //sendo igual a 10, dirá "não é maior que 10"
exercicio(0,1);
exercicio();
exercicio(12, 9);
exercicio(6, 6);

//exercício corrigido:
/*function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return "Defina dois números";
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = "";

    if(num1 !== num2) {
        saoIguais = "não";
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = "menor";
    let resultado20 = "menor";
    const compara10 = soma>10;
    const compara20 = soma>20;

    if(compara10) {
        resultado10 = "maior";
    }
    
    if(compara20) {
        resultado20 = "maior";
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(1, 2));*/