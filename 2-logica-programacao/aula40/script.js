// break x continue
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    if(numero === 2 ){
        console.log('pulado')
        continue;
    }

    // if(numero === 5 ){
    //     continue;
    // }

    if(numero === 7){
        console.log('7! Tchau...')
        break;
    }
    console.log(numero);
}