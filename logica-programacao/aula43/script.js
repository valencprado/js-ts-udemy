// função que recebe um número e retorna:
// divisível por 3 = Fizz
// divisível por 5 = Buzz
// divisível por 3 e 5 = FizzBuzz
// NÃO divide por 3 e 5 = retorna o número
// checar se o número é realmente um número
// função com números de 0 a 100

const numero = Math.round(Math.random() * 100);
 console.log(numero);

function fizzBuzz(){
    
if((numero % 3) === 0 & (numero % 5) === 0){
  console.log('FizzBuzz');
}else if((numero % 3) === 0){
  console.log('Buzz');
}else if((numero % 5) === 0){
  console.log('FizzBuzz');
}else if((numero% 3) !== 0 & (numero % 5) !== 0){
  console.log(numero);
}

// switch não funcionando
/*
 switch(numero){
     case (numero % 3) === 0 & (numero % 5) === 0:
         console.log('FizzBuzz');
         break;
     case (numero % 3) === 0:
         console.log('Fizz');
         break;
     case (numero % 5) === 0:
         console.log('Buzz');
         break;
     case (numero % 3) !== 0 & (numero % 5) !== 0:
         console.log(numero);
 }
*/
}
fizzBuzz();