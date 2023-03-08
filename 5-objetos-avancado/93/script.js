// prototypes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'OUTRO'+ this.nome +' ' + this.sobrenome;
}
Pessoa.prototype.nomeCompleto = function() {
return this.nome +' ' + this.sobrenome;
};
const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);