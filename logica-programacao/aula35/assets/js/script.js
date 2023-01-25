const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

let tag = elementos.map(elemento => {
    return elemento.tag
});
let texto = elementos.map(elemento =>{ 
    return elemento.texto;
});

for(let i = 0; i < elementos.length; i++){
    let tagHMTL =   document.createElement(`${tag[i]}`);
    tagHMTL.innerHTML += texto[i];
    }