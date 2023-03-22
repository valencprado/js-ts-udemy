const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.txt');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    {nome: 'a'},
    {nome: 'b'},
    {nome: 'c'},
    {nome: 'd'},
    {nome: 'e'},
];
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler();
   renderizaDados(dados);
}

function renderizaDados(dados) {
   dados = JSON.parse(dados);
   dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);