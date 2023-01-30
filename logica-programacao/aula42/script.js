// função chamada ePaisagem que recebe largura e altura de uma imagem
// retornar true se a imagem estiver no modo paisagem

function ePaisagem(largura, altura){
    const paisagem = largura > altura ?? true;
    return paisagem
}

console.log(ePaisagem(1000, 100))