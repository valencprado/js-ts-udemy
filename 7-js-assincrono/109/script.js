// métodos para promises
// Promise.all Promise.race Promice.resolve Promise.reject

// promises
function geraTempo(min, max) {
    min *= 1000;
    max *= 1000;
return Math.floor(Math.random() * (max-min) + min)
}
function espere(msg, tempo) {

    return new Promise((res, rej) => {
        if(typeof msg !== 'string') {
            rej('UEPA');
            return;
        }
        setTimeout(() => {
            res(msg + ' Passei na promise');
        }, tempo);
    });
   
}

// const promises = [
//     //'Primeiro valor',
//  espere('Promise 1', 3000),
//  espere('Promise 2', 1000), 
//  espere('Promise 3', 500), 
// // 'outro'
// ];
// Promise.race(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(e => console.log(e));


function baixaPagina() {
    const emCache = true;
    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {   
         return espere('Baixou', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));