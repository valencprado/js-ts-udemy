const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
   if(valor % 2 === 0) {
    acumulador += valor;
}
return acumulador;
}, 0)
//console.log(total);

const pessoas = [
    {nome: 'Luna', idade: 2},
    {nome: 'Alberto', idade: 62},
    {nome: 'Marcelo', idade: 23},
    {nome: 'Ana', idade: 15},
    {nome: 'Jimmy', idade: 8},
];

const maisVelha = pessoas.reduce((ac, valor) => {
   if(ac.idade > valor.idade) return ac;
   return valor;
});

console.log(maisVelha);