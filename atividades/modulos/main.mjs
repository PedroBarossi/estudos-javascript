import { mostraIdade, mostraCidade, mostraHobby } from "./functions.mjs";

class pessoa {
    constructor(nome, idade, cidade, hobby) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.hobby = hobby;
    }
}

let p1 = new pessoa("Pedro", 32, "São Paulo", "tocar guitarra");
let p2 = new pessoa("Amanda", 28, "Goiânia", "pintura");
let p3 = new pessoa("Gilberto", 53, "Campinas", "jogar futebol");

console.log(mostraIdade(p1));
console.log(mostraCidade(p2));
console.log(mostraHobby(p3));