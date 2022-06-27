function calcularImposto(renda: number, anoImposto = 2022): number { //anota o tipo do retorno
    if (anoImposto < 2022) return renda * 1.2;
    return renda * 1.3;
}

console.log(calcularImposto(10_000, 2021));

console.log(calcularImposto(10_000)); //ano tem valor default