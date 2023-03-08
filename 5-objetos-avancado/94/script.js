// // manipulando prototypes

// // new Object -> Object.prototype
// const objA = {
//     chaveA: 'A',
//     // __proto__: Object.prototype
// }

// // new Object -> Object.prototype
// const objB = {
//     chaveB: 'B',
//     // __proto__: ObjA
// }

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA); // criando herança
// Object.setPrototypeOf(objC, objB); // criando mais uma herança
// console.log(objB.chaveA);
// // objC -> objB -> objA -> Object


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camisa', 100)
// p1.desconto(50);
// console.log(p1);
// p1.aumento(50);

const p2 = {
    nome: 'Garrafinha',
    preco: 20
}
Object.setPrototypeOf(p2, Produto.prototype);
// p2.aumento(10);
// console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 15,
    },
    vendedor: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Fulano',
    },
});
p3.aumento(9);
console.log(p3);