const pessoa = {
    nome: 'Valen',
    sobrenome: 'Prado',
    idade: 18,
    endereco:{
        rua: 'Avenida oi',
        numero: 10
    }

};
//const nome = pessoa.nome // atribuição normal
//const { nome = '', sobrenome, idade } = pessoa // via desestruturação
// const {nome: teste, sobrenome, idade } = pessoa 
// pode mudar nome das variáveis
// extraindo do objeto
const {endereco: {rua, numero}, endereco} = pessoa; // extraindo objeto dentro do objeto
// dá para usar o rest também