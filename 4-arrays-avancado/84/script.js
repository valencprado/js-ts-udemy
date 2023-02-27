// Filter()

// const numeros = [5,50, 80, 1, 2, 3, 5,
// 11,15,22,
// 27];
// const filtro = numeros.filter(valor => valor > 10);
// console.log(filtro);

const pessoas = [
    {nome: 'Luna', idade: 2},
    {nome: 'Alberto', idade: 62},
    {nome: 'Marcelo', idade: 23},
    {nome: 'Ana', idade: 15},
    {nome: 'Jimmy', idade: 8},
];

const filtroNome = pessoas.filter(obj =>  obj.nome.length >= 5);
const filtroIdade = pessoas.filter(obj =>  obj.idade > 50);
const filtroA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(filtroNome);
console.log(filtroIdade);
console.log(filtroA);