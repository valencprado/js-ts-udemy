// promises
function geraTempo(min, max) {
    min *= 1000;
    max *= 1000;
return Math.floor(Math.random() * (max-min) + min)
}
function espere(msg, tempo) {

    return new Promise((resolveolve, reject) => {
        if(typeof msg !== 'string') reject('UEPA');
        setTimeout(() => {
            resolveolve(msg);
        }, tempo);
    });
   
}

espere('Conexão com BD', geraTempo(1, 3))
    .then(resolveolveposta => {
        console.log(resolveposta);
        return espere('Buscando dados da BD', geraTempo(1, 3));
    })
    .then(resolveposta => { 
        console.log(resolveposta);
        return espere(3443, geraTempo(1, 3));
    })
    .then((resolveposta) => {
        console.log(resolveposta);
    })
    .then(() => {
        console.log('Exibe os dados');
    })
    .catch(e => {
        console.log('ERRO', e);
    })


// espere('frase a', geraTempo(1, 3), function() {
//     espere('frase b', geraTempo(1, 3), function() {
//      espere('frase c', geraTempo(1, 3));

// });

// });