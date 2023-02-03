// const pessoa = {
//     nome: 'Valen', 
//     sobrenome: 'Prado'
// };
// console.log(pessoa.nome);

function criaPessoa(nome, sobrenome, idade){
        return{nome, sobrenome, idade};
}

const pessoa = criaPessoa('Valentina', 'Prado', 18);
console.log(pessoa.nome)