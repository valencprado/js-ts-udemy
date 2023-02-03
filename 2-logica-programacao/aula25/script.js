// mais de if/else if/ else

const numero = 10;

if (numero >=0 && numero <=5){
    console.log('Entre zero e cinco.');
 }
else if(numero >= 6 && numero <=8){//true
    console.log('Entre 6 e 8.')
}//else if(1 ===1){//true
//     console.log('LITERAL.')
// }// o código vai parar porque deu true, o que é RUIM
// SOLUÇÃO: CRIAR OUTRO IF POR ESTAR CHECANDO OUTRA COISA DIFERENTE DESSA CONDIÇÃO
else if(numero >= 9 && numero <=11){
    console.log('Entre 9 e 11.')
}
else{
    console.log('Não está entre 0 e 11.')
}
//if e else dependem um do outro 
