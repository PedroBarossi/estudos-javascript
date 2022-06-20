/*Crie uma função que receba um array e um número
Realize as seguintes validações:
-Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
-Se o array não for do tipo object, lance um erro do tipo TypeError
-Se o número não for do tipo number, lance um erro do tipo Type Error
-Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function validacao(array, number){
    try{
        if(!array && !number) throw new ReferenceError("Envie os parâmetros");

        if (typeof array !== "object") throw new TypeError("Array precisa ser do tipo Object");

        if (typeof number !== "number") throw new TypeError("O número precisa ser do tipo Number");

        if(array.length !== number) throw new RangeError("Tamanho inválido");

        return array;
    } catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é de referência");
            console.log(e.name);
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log("Este é um erro de tipo");
            console.log(e.name);
            console.log(e.stack);
        } else if (e instanceof RangeError) {
            console.log("Este é um erro de comprimento do array");
            console.log(e.name);
            console.log(e.stack);
        } else {
            console.log("Tipo de erro inesperado: " + e);
        }
    }
}

//testes
console.log(validacao());
console.log(validacao(5, 5));
console.log(validacao([], "test"));
console.log(validacao([1, 2, 3], 7));
console.log(validacao([2, 4, 6, 5, 18], 5));