console.log("Olá, mundo!");
let age: number = 20;
//age = "a"; impossível em typescript
if (age < 50) age += 10;
console.log(age);
//let sales: number = 123_456_789;  Não é obrigatório anotar o tipo se a variável for inicializada
let sales = 123_456_789;
//let course: string = "TypeScript";
let course = "TypeScript";
//let isPublished: boolean = true;
let isPublished = true;
let level; //se não for inicializada, a variável fica do tipo "any"
level = 1; //assim, ela pode mudar de tipo
level = "a"; //dinamicamente

//function render(document) { *causará erro pois é um any implícito
function render (document: any) { //resolve-se explicitando
    console.log(document);
}