//Named Export
function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa) {
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

function mostraHobby(pessoa) {
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

export {
    mostraIdade,
    mostraCidade,
    mostraHobby
}


/* Outra maneira de fazer Named Export
export function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostraCidade(pessoa) {
    `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

export function mostraHobby(pessoa) {
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}*/

/*Default Export
function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa) {
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

function mostraHobby(pessoa) {
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

export default mostraHobby;*/