// herança

//produto -> computador, celular -> cor, marca -> aumento e desconto

function Produto(nome, preco) {
this.nome = nome;
this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
this.preco -= quantia;
};

function Computador(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Computador.prototype = Object.create(Produto.prototype);
Computador.prototype.constructor = Computador;

Computador.prototype.aumento = function(percentual) {
this.preco = this.preco + (this.preco *( percentual / 100))
};

function Celular(nome, preco, marca, estoque) {
    Produto.call(this, nome, preco);
    this.marca = marca;
    Object.defineProperty(this,'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Celular.prototype = Object.create(Produto.prototype);
Celular.prototype.constructor = Celular;

const celular = new Celular('Iphone 5S', 1700, 'Apple', 3);


const computador = new Computador('Acer Nitro 5', 5000, 'Cinza');
console.log(computador);
console.log(celular);