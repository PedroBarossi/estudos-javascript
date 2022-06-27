"use strict";
function calcularImposto(renda, anoImposto = 2022) {
    if (anoImposto < 2022)
        return renda * 1.2;
    return renda * 1.3;
}
console.log(calcularImposto(10000, 2021));
console.log(calcularImposto(10000));
//# sourceMappingURL=functions.js.map