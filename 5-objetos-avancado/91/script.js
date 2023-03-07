// Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoque;
        },
        set: function(valor) {
           if(typeof valor !== 'number') {
         throw new TypeError('Num pode');
           }
        }
    });
    } 

    function criaProduto(nome) {
        return {
            get nome() {
                return nome;
            },
            set nome(valor) {
                valor = valor.replace('outro', 'AAAA');
                nome = valor;
            }
        }
    }
    // const p1 = new Produto('camisa', 1, 3);
    // p1.estoque = 'valor';
    // console.log(p1);
    // console.log(p1.estoque);
  
    
const p2 = criaProduto('algo');
p2.nome = 'outro';
console.log(p2.nome);