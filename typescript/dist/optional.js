"use strict";
function getCliente(id) {
    return id === 0 ? null : { aniversario: new Date() };
}
let cliente = getCliente(0);
console.log(cliente === null || cliente === void 0 ? void 0 : cliente.aniversario);
let cliente2 = getCliente(1);
console.log(cliente2 === null || cliente2 === void 0 ? void 0 : cliente2.aniversario);
//# sourceMappingURL=optional.js.map