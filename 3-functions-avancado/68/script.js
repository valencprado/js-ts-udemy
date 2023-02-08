// declarando funções

// declaração literal (Function hoisting)
function falaOi() {
    console.log('Oi');
}  
falaOi();

// function expression
const souUmDado = function() {
    console.log('Sou um dado.')
};
souUmDado();

// function executaFuncao(funcao){
//     console.log('Executando função...')
//     funcao();
// }
// executaFuncao(souUmDado);

// Arrow function 
 
const arrowFunction = () => {
    console.log('Função de flechinha')
}
arrowFunction();

// dentro de um objeto
const objeto = {
    // falar: function(){
    //     console.log('fala');
    // }, OU
    falar(){
        console.log('fala')
    }
};
objeto.falar(); 