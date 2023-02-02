const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let hora = 0;
let min = 0;
let seg = 0;

function ticTac(){
   seg++;
   if(seg === 60){
      seg = 0;
      mm++;
   }
   if(min === 60){
      min = 0;
      hora++;
   }
   relogio.innerHTML = `${hora < 10 ? '0' + hora:hora}:${min < 10 ? '0' + min:min}:${seg < 10 ? '0' + seg:seg}`;
}
let timer;
iniciar.addEventListener('click', event => {
 timer = setInterval(() => {
    ticTac();

}, 1000)
});
pausar.addEventListener('click', event =>{
     setTimeout(function(){
            clearInterval(timer);
    }, 0)
    relogio.className = 'relogio pausa';
   });
   zerar.addEventListener('click', event => {
      clearInterval(timer);
      hora = 0;
      min = 0;
      seg = 0;
      relogio.innerHTML = `00:00:00`;
      relogio.className = 'relogio';
});