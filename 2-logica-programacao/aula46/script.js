// setInterval, setTimeout

function olhaAHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
const timer = setInterval(function(){
    console.log(olhaAHora())
}, 1000);

setTimeout(function() {
    clearInterval(timer)
}, 4000);

setTimeout(function(){
    console.log('Olá mundo')
}, 5000);