function getSeconds(segs){
const data = new Date(segs * 1000);
return data.toLocaleTimeString('pt-BR', {
   hour12:false,
   timeZone: 'UTC'
})   
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

document.addEventListener('click', function(e){
   const el = e.target;

   if(el.classList.contains('iniciar')){
      timer = setInterval(() => {
         segundos++
        relogio.innerHTML = getSeconds(segundos);
        relogio.className = 'relogio';
     }, 1000)
   }

   if(el.classList.contains('pausar')){
      setTimeout(function(){
         clearInterval(timer);
      }, 0)
      relogio.className = 'relogio pausa';
   }
   if(el.classList.contains('zerar')){
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = `00:00:00`;
      relogio.className = 'relogio';
   }
})