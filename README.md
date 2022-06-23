# Me aprofundando nos estudos de JavaScript

Este repositório guarda conteúdo apresentado em aulas básico-intermediárias de JavaScript e algumas atividades desenvolvidas com sua ajuda.

## Atividades
### Comparação
Criar uma função que:
- receba dois números como parâmetros;
- confira se esses números são iguais;
- confira se a soma deles é maior que 10 e menor que 20;
- imprima essas informações no console.

### Palíndromo
Criar uma função que receba uma string e verifique se ela é um palíndromo (igual de trás para frente)

### Pares
Criar uma função que:
- receba um array como parâmetro;
- trocar por 0 todos os elementos pares diferentes de 0;
- retorne -1 se o array for vazio, null ou indefinido

### Aprovados
- Criar uma função que:
  - receba um array de objetos **aluno** e um número que represente a média final
  - percorra o array de alunos e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média
- *Desconstruir o objeto* para manipular as propriedades

### Manipular This
Dada a função calculaIdade, utilize os métodos **call** e **apply** para modificar o valor de this.
*Observação: Criar os próprios objetos*

Função dada:
```javascript
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}
```

### Admins
- Criar uma função que receba um Map
- Criar um Map e populá-lo com nomes de usuários e sua função no sistema
- Dentro da função, utilizar o loop ``for...of`` para retornar uma lista de nomes dos usuários que são administradores

### Únicos
Transformar o array dado em outro array de valores únicos utilizando um Set

Array dado:
```javascript
const meuArray = [30, 30, 40, 5 , 223, 2049, 3034, 5];
```

### Map, Filter e Reduce
1. Pratique a sintaxe de multiplicação com Map uma vez utilizando o parâmetro this e uma vez sem ele
2. Filtre e retorne todos os números pares de um array
3. Some todos os números de um array utilizando Reduce
4. Crie uma função que:
   - receba uma lista de preços e um número representando o saldo disponível
   - calcule qual será o saldo final após subtrair todos os preços da lista enviada

### Validação de Erro
- Crie uma função que receba um array e um número
- Realize as seguintes validações:
  -  os parâmetros não forem enviados, lance um erro do tipo ``ReferenceError``
  - Se o array não for do tipo object, lance um erro do tipo ``TypeError``
  - Se o número não for do tipo number, lance um erro do tipo ``Type Error``
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo ``RangeError``
- Utilize a declaração ``try...catch``
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador ``instanceof``

### catAPI
- Utilizar a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método ``fetch()``;
- Criar a imagem e ativar o evento de clique do botão através da manipulação do DOM

### Conta Bancária
- Crie a classe ContaBancaria, que possui os parâmetros ``agencia``, ``numero``, ``tipo`` e ``saldo``;
- Dentro de ContaBancaria, construa o ``getter`` e o ``setter`` de saldo;
- Dentro de ContaBancaria, crie os métodos ``sacar`` e ``depositar``;
- Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro ``cartaoCredito``;
- Ainda em ContaCorrente, construa o ``getter`` e o ``setter`` de cartaoCredito;
- Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
- Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
- Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
- Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.