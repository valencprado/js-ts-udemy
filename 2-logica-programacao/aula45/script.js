// try, catch, finally

// try{
// // executado quando não tem erros
// // console.log(b);
// console.log('Abri um arquivo');
// console.log('Deu algum probleminha');
// console.log('Fechei');

// try{
//     console.log(x);
// }catch(e){
//     console.log('Ops');
// }finally{
//     console.log('Finally mais uma vez')
// }
// } catch(e){
//     // executado quando tem erros
//     console.log('Tratando o erro');
// } finally{
//     // executado sempre
//     console.log('Finalmente! Eu sempre sou executado!')
// }



function olhaAHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    });
}   
try{

    const data = new Date('19-09-2022 13:40:23');
    const hora = olhaAHora();
    console.log(hora);
}catch(e){
    console.log('Vish! Algo deu errado.')
}finally{
    console.log('Bom dia :)')
}

