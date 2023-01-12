const form = document.querySelector('#form');
const resultado = document.querySelector('.resultado');

// pegar valor do peso
// pegar valor da altura
// realizar o cálculo
/* mostrar embaixo o resultado do cálculo + se é abaixo,
normal, obeso etc.
*/
function calculaIMC(){
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');
    const pessoa = {
            peso: peso.value,
            altura: altura.value,
    };
   const calculo = pessoa.peso / (pessoa.altura*pessoa.altura);
   console.log(pessoa.peso, pessoa.altura);
   if(calculo < 18,5){
        resultado.innerHTML += `<p>O resultado obtido foi ${calculo}. Você está abaixo do peso.</p>`;
        resultado.className = 'resultado-abaixo'
   }else if(calculo >= 18,5 && calculo <= 24,9){
    resultado.innerHTML += `<p>O resultado obtido foi ${calculo}. Você está com o peso normal.</p>`;
    resultado.className = 'resultado-ok'
   }else if(calculo >= 25 && calculo <= 29,9){
    resultado.innerHTML += `<p>O resultado obtido foi ${calculo}. Você está sobrepeso.</p>`;
    resultado.className = 'resultado-sobrepeso'
   }else if(calculo >= 30 && calculo <= 34,9){
    resultado.innerHTML += `<p>O resultado obtido foi ${calculo}. Você está sobrepeso.</p>`;
    resultado.className = 'resultado-obeso-um'
   }else if(calculo >= 35 && calculo <= 39,9){
    resultado.innerHTML += `<p>O resultado obtido foi ${calculo}. Você está sobrepeso.</p>`;
    resultado.className = 'resultado-obeso-dois'
   }else if(calculo > 40){
    resultado.innerHTML += `<p>O resultado obtido foi ${resultado}. Você está sobrepeso.</p>`;
    resultado.className = 'resultado-obeso-tres'
   }else{
    resultado.innerHTML += `Submeta os valores corretamente.`
   }
}
