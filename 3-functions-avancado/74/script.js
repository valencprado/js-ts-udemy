// IIFE - Immediately Invoked Function Expression
(function(){
const sobrenome = 'a';
function criaNome(nome) {
    return nome + ' ' + sobrenome;
}
function falaNome() {
    console.log(criaNome('b'))
}
falaNome();
})();
