// pegar valor do peso
// pegar valor da altura
// realizar o cálculo
/* mostrar embaixo o resultado do cálculo + se é abaixo,
normal, obeso etc.
*/

const form = document.querySelector('#form');
const resultado = document.querySelector('.resultado');
const inputPeso = form.querySelector('#peso');
const inputAltura = form.querySelector('#altura');

form.addEventListener('submit', function calculaIMC(e){
        e.preventDefault();
        const peso = inputPeso.value;
        const altura = inputAltura.value;
        if (!peso) {
                setResultado('Peso inválido', false);
                return;
              }
            
              if (!altura) {
                setResultado('Altura inválida', false);
                return;
              }
   let calculo = peso / (altura*altura);
   resultado.innerHTML += `<p>O resultado obtido foi ${calculo.toFixed(2)}. `
   if(calculo < 18,5){
      resultado.innerHTML +=  `Você está abaixo do peso.</p>`;
        resultado.className = 'resultado-abaixo'
}   else if(calculo >= 18,5 && calculo <= 24,9){
    resultado.innerHTML += `Você está com o peso normal.</p>`;
    resultado.className = 'resultado-ok'
   }else if(calculo >= 25 && calculo <= 29,9){
    resultado.innerHTML += `Você está sobrepeso.</p>`;
    resultado.className = 'resultado-sobrepeso'
   }else if(calculo >= 30 && calculo <= 34,9){
    resultado.innerHTML += `Você está sobrepeso.</p>`;
    resultado.className = 'resultado-obeso-um'
   }else if(calculo >= 35 && calculo <= 39,9){
    resultado.innerHTML += ` Você está sobrepeso.</p>`;
    resultado.className = 'resultado-obeso-dois'
   }else if(calculo > 40){
    resultado.innerHTML += `Você está sobrepeso.</p>`;
    resultado.className = 'resultado-obeso-tres'
   }else{
    resultado.innerHTML += `Submeta os valores corretamente.`
   }
})

// o cálculo funciona, mas não mostra o nível correto