import {mostraIdade, mostraCidade, mostraHobby} from "./exportar.js";

class pessoa {
    constructor(nome, idade, cidade, hobby) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.hobby = hobby;
    }
}