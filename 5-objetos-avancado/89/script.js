// revisando objetos
// const pessoa = {
//     nome: 'A',
//     sobrenome: 'b',
// };

// console.log(pessoa['nome']);
// console.log(pessoa.sobrenome);


// const pessoa1 = new Object();
// pessoa1.nome = 'a';
// pessoa1.sobrenome = 'b';
// pessoa1.idade = 12;
// pessoa1.falar = function() {
// return (`${this.nome} tá falando`)
// }
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }
// // delete pessoa1.nome;
// pessoa1.falar();
// pessoa1.getDataNascimento();

// for (let chave in pessoa1) {
//    console.log(chave);
// }

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome, 
         nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },  
    };
}
const p1 = criaPessoa('a', 'b');
// console.log(p1.nomeCompleto());


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); // impossível mexer
}

const p2 = new Pessoa('c','d');
console.log(p2);