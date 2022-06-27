//Type Alias
type Empregado = {
    readonly id: number;
    name: string,
    aposentar: (date: Date) => void
}

let funcionario: Empregado = {
    id:1,
    name:"Pedro",
    aposentar: (date: Date) => console.log(date)
};

let outroFuncionario: Empregado = {
    id:2,
    name:"Gilson",
    aposentar: (date: Date) => console.log(date)
};

//Union Type
function kgParaLbs(peso: number | string) : number {
    //Narrowing
    if (typeof peso === "number") return peso * 2.2;
    else return parseInt(peso) * 2.2;
}

console.log(kgParaLbs(10));
console.log(kgParaLbs("10Kg"));

//Intersection Type
type Dragable = { //objeto que pode ser arrastado
    arrastar: () => void;
};

type Resizable = { //objeto cujo tamanho pode ser alterado
    mudarTamanho: () => void
};

type UIWidget = Dragable & Resizable; //possui ambos os tipos

let textBox: UIWidget = {
    arrastar: () => {},
    mudarTamanho: () => {}
}

//Literal Type
type Quantidade = 50 | 100; //só pode ter um desses dois valores
let quantidade: Quantidade = 100;

type Metrica = "centímetros" | "polegadas";

//Nullable Type

/*
function cumprimentar(nome: string) {
    if (nome) console.log(`OLÁ, ${nome.toUpperCase}!`);
    else console.log("¡Hola!");
}

cumprimentar(null); não é permitido */

function cumprimentar(nome: string | null | undefined) {
    if (nome) console.log(`OLÁ, ${nome.toUpperCase}!`);
    else console.log("¡Hola!");
}

cumprimentar(null);