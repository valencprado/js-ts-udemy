// Object.defineProperty() e Object.defineProperties()

function Produto(nome, preco, estoque) {

Object.defineProperty(this, 'estoque', {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: false,
})
Object.defineProperties(this, {
nome: {    enumerable: true,
    value: nome,
    writable: true,
    configurable: false,

},
preco: {    enumerable: true,
    value: preco,
    writable: true,
    configurable: true,

},
});
} 
const p1 = new Produto('camisa', 1, 3);
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}