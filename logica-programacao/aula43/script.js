// função que recebe um número e retorna:
// divisível por 3 = Fizz
// divisível por 5 = Buzz
// divisível por 3 e 5 = FizzBuzz
// NÃO divide por 3 e 5 = retorna o número
// checar se o número é realmente um número
// função com números de 0 a 100


function fizzBuzz(numero){
if(typeof numero !== 'number')return numero
if((numero % 3) === 0 & (numero % 5) === 0) return 'FizzBuzz';
else if((numero % 3) === 0) return 'Fizz';
else if((numero % 5) === 0) return 'Buzz';
return numero;
}
for(let i = 0; i <= 100; i++){
  console.log(i, fizzBuzz(i));
}