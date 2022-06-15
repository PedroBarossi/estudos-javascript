//Receber uma string e verificar se é um palíndromo

//Solução 1
function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

let dead;

console.log(verificaPalindromo(dead)); //string inexistente
console.log(verificaPalindromo("ovo")); //true
console.log(verificaPalindromo("Bolton")); //false

//Solução 2
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let c=0;c<string.length/2;c++) {
        if(string[c] !== string[string.length-1-c]) return false;
    }

    return true;
}

let parrot;
console.log(verificaPalindromo2(parrot)); //string inexistente
console.log(verificaPalindromo2("asa")); //true
console.log(verificaPalindromo2("Ipswitch")); //false