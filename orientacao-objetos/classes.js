class Animal {
    constructor(type = "animal") {
        this.type = type;
    }

    get type() {
        return this._type;
    }

    set type(val) {
        this._type = val.toUpperCase();
    }

    makeSound() {
        console.log("Fazendo o som do animal: ");
    }
}

let a = new Animal()
console.log(a.type); //ANIMAL

class Gato extends Animal {
    constructor(){
        super("gato");
    }

    makeSound() {
        super.makeSound;
        console.log("Outro gaaato!");
    }
}

let b = new Gato();
console.log(b.type); //GATO