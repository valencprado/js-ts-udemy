// factory functions + prototypes
const falar = { 
    falar() {
    console.log(`${this.nome} está falando.`);
},
};
const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
};
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    },
};


function criaPessoa(nome, sobrenome) {
   // const pessoaPrototype = {...falar, ...comer, ...beber};
   const pessoaPrototype = Object.assign({}, falar, comer, beber);
   
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: { value: sobrenome}
    });
}

const p1 = criaPessoa('a', 'b');
const p2 = criaPessoa('GGG', 'VVVV');
console.log(p1);
console.log(p2);