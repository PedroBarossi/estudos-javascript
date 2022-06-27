/*let empregado = { id: 1 };
empregado.nome = "Pedro"; *erro porque o atributo não existe */

/*let empregado: {
    id: number;
    name: string
} = {id:1}; *não atribui nada a name*/

let empregado: {
    readonly id: number;
    name: string,
    aposentar: (date: Date) => void
} = {
    id:1,
    name:"",
    aposentar: (date: Date) => console.log(date)
};

empregado.name = "Pedro";
//empregado.id = 0;