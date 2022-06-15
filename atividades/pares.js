/*Trocar por 0 todos os elementos pares diferentes de 0 de um array
Se o array for vazio, retornar -1*/

function trocarPares(array) {
    if (!array || !array.length) return -1;

    for(let c=0; c<array.length; c++) {
        if(array[c] === 0) console.log("Não substituir 0");
        else if (array[c]%2===0) {
            console.log(`Substituindo ${array[c]} por 0`);
            array[c] = 0;
        }
    }

    return array;
}

let array = [];
console.log(trocarPares(array));
array = [0, 3, 4, 18, 15, 33, 42, 69, 60];
console.log(trocarPares(array));
console.log(trocarPares(null));