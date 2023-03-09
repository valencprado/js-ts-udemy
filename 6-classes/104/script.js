// herança com classes

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado`)
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está desligado`)
            return;
        }
        this.ligado = true;
    }
}
class Smartphone extends DispositivoEletronico {
constructor(nome, cor, modelo) {
super(nome);
this.cor = cor;
this.modelo = modelo;
}
}

class Computer extends DispositivoEletronico {
constructor(nome, preco) {
    super(nome);
    this.preco = preco;
}
ligar() {
    console.log('Ligar não é mais ligar! Eita');
}
falaOi() {
    console.log('oi');
}
}

const s1 = new Smartphone('Iphone', 'Preto', '11 Pro');
console.log(s1);

const c1 = new Computer('HP ', 120);
console.log(c1.falaOi());