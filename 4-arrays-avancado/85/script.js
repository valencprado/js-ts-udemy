// map()
const numeros = [5, 50, 80, 1, 2, 3, 5, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2)
// console.log(dobro);


const pessoas = [
    {nome: 'Luna', idade: 2},
    {nome: 'Alberto', idade: 62},
    {nome: 'Marcelo', idade: 23},
    {nome: 'Ana', idade: 15},
    {nome: 'Jimmy', idade: 8},
];

const somenteNomes = pessoas.map(obj =>  obj.nome)
// console.log(somenteNomes);

const somenteIdade = pessoas.map(obj => ({idade: obj.idade}))
// console.log(somenteIdade);

const id = pessoas.map((obj, indice) => {
    obj.id = (indice + 1);
    return obj;
})
console.log(pessoas);
// console.log(id);