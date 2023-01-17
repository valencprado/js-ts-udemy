// teríamos que checar dia por dia na mesma variável condição ótima para usar switch

function getWeekDay(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0: 
        diaSemanaTexto= 'Domingo';
        return diaSemanaTexto
        
        case 1: 
        diaSemanaTexto= 'Segunda';
        return diaSemanaTexto
        
        case 2: 
        diaSemanaTexto= 'Terça';
        return diaSemanaTexto
        
        case 3: 
        diaSemanaTexto= 'Quarta';
        return diaSemanaTexto
        
        case 4: 
        diaSemanaTexto= 'Quinta';
        return diaSemanaTexto
        
        case 5: 
        diaSemanaTexto='Sexta';
        return diaSemanaTexto
        
        case 6: 
        diaSemanaTexto= 'Sábado';
        // com return não precisa de break
        return diaSemanaTexto
    }
}


const data = new Date('1987-04-29 00:00:00');
const diaSemana = data.getDay(); // variável diferente da função
const diaSemanaTexto = getWeekDay(diaSemana);
console.log(diaSemana, diaSemanaTexto);