// parâmetros
const conta = function (operador, acumulador, ...numeros) {
for (let numero of numeros) {
    if(operador === '+')acumulador += numero
    if(operador === '-')acumulador -= numero
    if(operador === '*')acumulador *= numero
    if(operador === '/')acumulador /= numero
}
console.log(acumulador);
};
conta('+', 1, 20, 10, 5);