function verificaPalindromo(string) {
    //if (!string) return "String inválida";    retorna uma string
    if (!string) throw "String inválida"; //retorna um erro

    return string === string.split("").reverse().join("");
}

console.log(verificaPalindromo(""));