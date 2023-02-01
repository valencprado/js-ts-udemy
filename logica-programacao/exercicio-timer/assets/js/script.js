const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let minuto = 0;
let segundo = 0;
let milissegundo = 0;
iniciar.addEventListener('click', function(event){
   const tempo =  setInterval(function(){
        
    }, 1000)
});
pausar.addEventListener('click', function(event){
     setTimeout(function(){
            clearInterval(tempo);
    }, 0)
});
zerar.addEventListener('click', function(event){
    alert('zerar');
});