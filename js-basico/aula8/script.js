const nome = 'Valen';
const sobrenome = 'Prado';
const idade = 17;
const peso = 50;
const alturaEmM = 1.65;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM); // peso / (altura * altura)
let anoNascimento = 2004;

// vírgulas
console.log(nome, sobrenome, 'tem ', idade, 'anos, pesa', peso, 'kg')
// template string
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
// concatenação
console.log(nome + ' nasceu em '+ anoNascimento)

// todas as formas de como printar string + variáveis por fins educativos