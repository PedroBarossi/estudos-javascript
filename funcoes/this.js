const pessoa = {
    firstName: "Peter",
    lastName: "Parker",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

console.log(pessoa.fullName());
console.log(pessoa.getId());

//Call

const humano = {
    nome: "Willy",
};

const baleia = {
    nome: "Pam",
};

function getName() {
    console.log(this.nome);
}

getName.call(humano); //Willy
getName.call(baleia); //Pam

const valores = {
    num1: 2,
    num2: 4,
};

function somaQuatro(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

somaQuatro.call(valores, 1, 5); //12

//Apply

getName.apply(humano); //igual call
somaQuatro.apply(valores, [1, 5]); //argumentos como vetor

//Bind
const retornaNome = function() {
    return this.nome;
}

let outroHumano = retornaNome.bind({nome: "Flipper"});

console.log(outroHumano());