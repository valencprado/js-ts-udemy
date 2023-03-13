
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable:false,
            configurable: false,
            enumerable: true
        });
    }
    isSequencial() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
     geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos +  digito1 + digito2;
    }
   static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let numeroString of cpfSemDigitos) {
            total += reverso * Number(numeroString);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : 0;

    }
    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencial()) return false;
        this.geraNovoCpf();
        console.log(this.novoCPF);
    
        return this.novoCPF === this.cpfLimpo;
    }
}

// let cpf = new ValidaCPF('705.484.450-52');

// if(cpf.valida()) {
//     console.log('CPF válido');
// }else {
//     console.log('VPF inválido');
// }