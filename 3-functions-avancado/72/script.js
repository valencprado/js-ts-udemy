// closures

function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Valen');
const funcao2 = retornaFuncao('Tina');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());