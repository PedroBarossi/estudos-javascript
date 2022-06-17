//Transformar o array dado em outro array de valores únicos utilizando Set

//Array dado
const meuArray = [30, 30, 40, 5 , 223, 2049, 3034, 5];

function valoresUnicos(array) {
    const setAux = new Set(array);

    return [...setAux];

}

console.log(valoresUnicos(meuArray));