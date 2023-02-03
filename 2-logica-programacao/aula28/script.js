// date
//ano, mês, dia, hora, minuto, segundo, milésimo
// dataString: '2022-05-18 20:20:59'
// const data = new Date(1673886837715
//     );
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('Milissegundo', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());
// console.log(data.toString());
// console.log(Date.now());

// colocar zero à esquerda
function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`
}
// formata a data
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date()
const dataBrasil = formataData(data);
console.log(dataBrasil);