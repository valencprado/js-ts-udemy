// métodos para objetos
/**
 * ... (spread operator)
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop)
 * Object.values
 * Object.entries
 * 
 *  
 * Já visto:
 * Object.keys()
 * Object.freeze()
 * Object.defineProperties()
 * Object.defineProperty()
 */

const produto = {nome: 'Caneca', preco: 10};
console.log(Object.entries(produto));
// console.log(produto);
// Object.freeze(produto);
// console.log(Object.keys(produto))
// copiar objeto -> spread operator
// const outro = {...produto, material: 'argila'};
// const camiseta = Object.assign({}, produto, {material: 'argila'});

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}