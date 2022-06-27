"use strict";
let funcionario = {
    id: 1,
    name: "Pedro",
    aposentar: (date) => console.log(date)
};
let outroFuncionario = {
    id: 2,
    name: "Gilson",
    aposentar: (date) => console.log(date)
};
function kgParaLbs(peso) {
    if (typeof peso === "number")
        return peso * 2.2;
    else
        return parseInt(peso) * 2.2;
}
console.log(kgParaLbs(10));
console.log(kgParaLbs("10Kg"));
let textBox = {
    arrastar: () => { },
    mudarTamanho: () => { }
};
let quantidade = 100;
function cumprimentar(nome) {
    if (nome)
        console.log(`OLÁ, ${nome.toUpperCase}!`);
    else
        console.log("¡Hola!");
}
cumprimentar(null);
//# sourceMappingURL=tipos-avancados.js.map