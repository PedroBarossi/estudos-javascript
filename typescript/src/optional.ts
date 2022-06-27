type Cliente = {
    aniversario? : Date
};

function getCliente(id: number): Cliente | null | undefined {
    return id === 0 ? null : {aniversario: new Date()};
}

let cliente = getCliente(0);
console.log(cliente?.aniversario);
let cliente2 = getCliente(1);
console.log(cliente2?.aniversario);
let cliente3 = getCliente(2);
console.log(cliente3?.aniversario?.getFullYear);

//cliente?.[0] se houver tal elemento no array
//log?.("a") se tal função existir