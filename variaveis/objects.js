let person = {
    name: "John",
    age: 20
}

let obj = {}
obj.name = "Pedro";
obj.age = 32;

console.log(person);
console.log(obj); //exibem a mesma estrutura
console.log(Object.values(person));
console.log(Object.keys(obj));

let mom = "nameOfMom";
//person.mom = "Maria"; chave seria "mom"
person[mom] = "Maria"; //chava agora é o valor da variável mom
console.log(person);