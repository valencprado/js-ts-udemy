// while e do while

// let controle = 0;

// while(controle <= 10){
// console.log(controle);
// controle++;
// }

// gera número
function random(min, max){
const r = Math.random() * (max - min) + min;
return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = 10

 while(rand !== 10){
    rand = random(min, max)   
    console.log(rand);
}

do{
    rand = random(min, max)   
    console.log(rand);

}while(rand !== 10);