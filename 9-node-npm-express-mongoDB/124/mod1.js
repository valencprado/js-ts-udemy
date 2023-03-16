// const nome = 'exemplo';
// const sobrenome = 'EEExemplo';

// const falaNome = () => nome + ' ' + sobrenome;

// exports.nome = nome;
// exports.sobrenome =sobrenome;
// exports.falaNome = falaNome;
// this.an =  'a';


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Luiz';

module.exports = {
    nome, Pessoa
}