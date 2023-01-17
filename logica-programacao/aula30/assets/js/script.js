const data = new Date();
const diaSemana = data.getDay(); 
const section = document.querySelector('.container');
const mes = data.getMonth();

function getWeekDay(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0: 
        diaSemanaTexto= 'Domingo';
        return diaSemanaTexto
        
        case 1: 
        diaSemanaTexto= 'Segunda-feira';
        return diaSemanaTexto
        
        case 2: 
        diaSemanaTexto= 'Terça-feira';
        return diaSemanaTexto
        
        case 3: 
        diaSemanaTexto= 'Quarta-feira';
        return diaSemanaTexto
        
        case 4: 
        diaSemanaTexto= 'Quinta-feira';
        return diaSemanaTexto
        
        case 5: 
        diaSemanaTexto='Sexta-feira';
        return diaSemanaTexto
        
        case 6: 
        diaSemanaTexto= 'Sábado';
        return diaSemanaTexto
    }
}
function getMonthName(mes){
    let mesTexto;
    switch(mes){
        case 0: 
        mesTexto = 'Janeiro';
        return mesTexto 
        
        case 1: 
        mesTexto = 'Fevereiro';
        return mesTexto 
        
        case 2: 
        mesTexto = 'Março';
        return mesTexto 
        
        case 3: 
        mesTexto = 'Abril';
        return mesTexto 
        
        case 4: 
        mesTexto = 'Maio';
        return mesTexto 
        
        case 5: 
        mesTexto ='Junho';
        return mesTexto 
        
        case 6: 
        mesTexto = 'Julho';
        return mesTexto  
        case 7: 
        mesTexto = 'Agosto';
        return mesTexto  
        case 8: 
        mesTexto = 'Setembro';
        return mesTexto  
        case 9: 
        mesTexto = 'Outubro';
        return mesTexto  
        case 10: 
        mesTexto = 'Novembro';
        return mesTexto  
        case 11: 
        mesTexto = 'Dezembro';
        return mesTexto 
    }
}
function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`
}
function formataData(data){
    const dia = data.getDate();
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    return `<h1>${getWeekDay(diaSemana)}, ${dia} de ${getMonthName(mes)} de ${ano}. ${hora}:${minuto}</h1>`
    
}
section.innerHTML= formataData(data);