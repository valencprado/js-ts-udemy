class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // método de instância
    aumentarVolume() {
        this.volume +=2
    }
    // método de instância
    diminuirVolume() {
        this.volume -=2
    }
    // método estático (se refere à classe)
    static trocaPilha() {
        console.log('Bora trocar pilhas');
    }
}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilha();