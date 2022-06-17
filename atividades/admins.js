/*Criar uma função que receba um Map
Criar um Map e populá-lo com nomes de usuários e sua função no sistema
Dentro da função, utilizar o loop for...of para retornar uma lista de nomes dos usuários que são administradores*/

function getAdmins(map) {
    let admins = [];

    for([key, value] of map) {
        if (value === "Admin") admins.push(key);
    }

    return admins;
}

const usuarios = new Map();

usuarios.set("Frank", "Admin");
usuarios.set("Suzy", "User");
usuarios.set("Billy", "User");
usuarios.set("Ethel", "User");
usuarios.set("Studebaker", "User");
usuarios.set("Gregary", "Admin");
usuarios.set("Joe", "User");
usuarios.set("Lucille", "User");
usuarios.set("Sy", "User");
usuarios.set("Mary", "Admin");

console.log(getAdmins(usuarios));