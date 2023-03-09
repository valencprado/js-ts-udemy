// getters e setters
// const velocidadeee = Symbol('velocidade');
// class Carro {
//     constructor(nome) {
//         this.nome = nome;
//         this[velocidadeee] = 0;
//     }
//     set velocidade(valor) {
//         console.log('SETTER');
//         if(typeof valor !== 'number') return;
//         if(valor >= 100 || valor <= 0) return;
//         this[velocidadeee] = valor;
//     }
//     get velocidade(){
//         console.log('GETTER');
//         return this[velocidadeee];
//     }

//     acelerar() {
//         if(this[velocidadeee] >= 100) return;
//         this[velocidadeee]++;
//     }
//     freiar() {
//         if(this[velocidadeee] <= 0) return;
//         this[velocidadeee]--;
//     }
// }

// const c1 = new Carro('fusquinha');
// c1.velocidade = 34
// console.log(c1.velocidade);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('alguém', 'feliz');
p1.nomeCompleto = 'Outro nome'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);