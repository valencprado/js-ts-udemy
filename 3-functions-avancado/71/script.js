// escopo léxico
const nome = 'a';


function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'b';
    falaNome();
}

usaFalaNome();