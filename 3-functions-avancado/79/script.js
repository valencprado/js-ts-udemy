// funções recursivas
function recursiva(max) {
    console.log(max);
    if(max >= 10) return; // máximo
    max++;  // incrementação
    recursiva(max);
}

recursiva(0);