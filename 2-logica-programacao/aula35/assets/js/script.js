const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];
const container = document.querySelector('.container');
const div = document.createElement('div');


for(let i = 0; i < elementos.length; i++){
    // desestruturação
    let {tag, texto} = elementos[i];
    let tagHTML = document.createElement(tag);
    let textoCriado = document.createTextNode(texto)
    tagHTML.appendChild(textoCriado);
    div.appendChild(tagHTML);
    }
    container.appendChild(div);