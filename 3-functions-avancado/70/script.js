// o return
// function soma(a, b) {
//     return a + b;
// } 
// console.log(soma(1, 4))



// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome};
// }
// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log( p1)

function criaMultiplicador(multiplicador) {
return function(n) {
   return n * multiplicador;
};
}

const duplica = criaMultiplicador(2); // fechando o escopo depois de ser fechado
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(10));