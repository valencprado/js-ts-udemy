// constructor functions (constrói objetos)
// começa com letra maiúscula 
// new Pessoa 

function Pessoa(nome, sobrenome) {
    const ID = 12;
    const metodoInterno = () => {
        //algo interno
    }
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(this.nome + ' método');
    }
}

const p1 = new Pessoa('a', 'b');
const p2 = new Pessoa('c', 'd');

p2.metodo();