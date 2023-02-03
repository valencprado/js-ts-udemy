const numero = prompt('Digite um número:')
const titulo = document.getElementById('titulo');
const raizQuadrada = document.getElementById('raiz-quadrada');
const inteiro = document.getElementById('inteiro');
const notANumber = document.getElementById('not-a-number');
const arredondadoCima = document.getElementById('arredondado-cima');
 const arredondadoBaixo = document.getElementById('arredondado-baixo');
 const casasDecimais = document.getElementById('casas-decimais');

 titulo.innerHTML= numero;
 raizQuadrada.innerHTML = numero ** 0.5;
 inteiro.innerHTML = Number.isInteger(numero);
 notANumber.innerHTML = Number.isNaN(numero);
 arredondadoCima.innerHTML = Math.ceil(numero);
 arredondadoBaixo.innerHTML = Math.floor(numero);
 casasDecimais.innerHTML = numero.toFixed(2);
// OBS: fiz diferente do professor, mas deu no mesmo