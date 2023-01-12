// curto-circuito: quando o valor falso/falsy faz com que pare a checagem

/**
 *  false && true -> false (não precisa checar mais nada)
 *  false || true -> retorna o "valor verdadeiro" ou o primeiro valor verdadeiro
 * 
 */
// console.log('alguém' && 0 && 'a') // retorna o valor false, no caso o 0
// console.log('alguém' && true && 'a') // retorna a última que for verdadeira
// tudo pode ser verdadeiro ou falso no JS


/* FALSY (não é literalmente falso) 
false
0
" " ' ' ` `
null/undefined
NaN
*/
// function falaOi(){
//     return 'Oi';
// }
//let vaiExecutar = false;
//console.log(vaiExecutar && falaOi()); // gera false e a função não executa

//console.log(0 || false || null || 'alguém' || true); // precisa de apenas uma informação verdadeira para retornar o valor verdadeiro


// //const corUsuario = null; //retorna preto
// const corUsuario = 'Vermelho'; //retorna vermelho
// const corPadrao = corUsuario || 'preto';
// console.log(corPadrao);


const a = 0;
const b = null;
//const c = 'false'; //string, ou seja, true
const c = false; //string, ou seja, true
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // último valor falso