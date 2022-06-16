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
