// async/ await
function geraTempo(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function espere(msg, tempo) {

    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('UEPA');
            return;
        }
        setTimeout(() => {
            resolve(msg + ' Passei na promise');
        }, tempo);
    });

}

// com then
// espere('Fase 1', geraTempo(0, 3))
//     .then(valor => {
//         console.log(valor);
//        return espere('Fase 2', geraTempo());
//     })
//     .then(fase => {
//         console.log(fase);
//         return espere('Fase 3', geraTempo());
//     })
//     .then(fase => console.log(fase))
//     .catch(e => console.log(e));

async function executa() {
    try {
        const fase1 = await espere('Fase 1', geraTempo(0, 3));
        console.log(fase1);
        const fase2 = await espere('Fase 2', geraTempo(0, 3));
        console.log(fase2);
        const fase3 = await espere('Fase 3', geraTempo(0, 3));
        console.log(fase3);
        console.log('termina na terceira');
    } catch (e) {
        console.log(e);
    }
}

executa();