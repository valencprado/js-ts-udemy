// var x let x const 
// let: ESCOPO DE BLOCO
// var: ESCOPO DE FUNÇÃO


const verdadeira = true;    
var nome = 'Valen';
let nome2 = 'Vi';

// if(verdadeira){
//     let nome = 'Ana' //PODE? pode!LET TEM ESCOPO DE BLOCO
    
//     if(verdadeira){
//        // let nome= 'a'
//         console.log('show');
//         console.log(nome, nome2);
// }}  

// if(verdadeira){
//     let nome = 'Ana' //PODE? pode!LET TEM ESCOPO DE BLOCO
//     var nome2 = 'Jimmy' // redeclarada
    
//     if(verdadeira){
//         let nome = 'Ana' 
//         var nome2 = 'algo' // redeclarada
//        // let nome= 'a'
//         console.log('show');
//         console.log(nome, nome2);
// }}  
// var sobrenome = 'Prado';
// // a função sabe do seu closure (vizinhos)
// function falaOi(){
//     var nome = 'Valentina';
//     console.log(nome, sobrenome);
//     // escopo muuuito especial
//     // aqui os vizinhos não tem acesso
//     if(verdadeira){
//         console.log(sobrenome);
//         // com let todos os blocos ficam "egoístas"
//     }
// }
// // console.log(nome); // não dá
// falaOi();

console.log(sobrenome);

var sobrenome = 'Prado'; // eleva a declaração da variável