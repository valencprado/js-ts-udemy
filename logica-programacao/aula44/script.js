// try, catch, throw
// código que pode dar erro



function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('cadê os números?');
    }
    return x + y;
}
try{
    console.log(soma(1, 2));
console.log(soma('1', 2));
}catch(error){
console.log('Erro.')
}