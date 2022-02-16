const data = new Date()
const timeText = document.querySelector('.current-time h1')

/* 
    - toLocaleString() retorna a porção data e hora
    - Ambas propriedades dateStyle e timeStyle funcionam no toLocaleString()
*/
timeText.innerHTML = data.toLocaleString('pt-BR', {dateStyle:"full", timeStyle:"medium"})

/*
    - toLocaleDateString() retorna a porção data
    - toLocaleTimeString() retorna a porção hora
    - A propriedade dateStyle só funciona no toLocaleDateString()
    - A proriedade timeStyle só funciona no toLocaleTimeString()

    timeText.innerHTML = (
        `${data.toLocaleDateString('pt-BR', {dateStyle:'full'})} 
         ${data.toLocaleTimeString('pt-BR', {timeStyle:'medium'})}`)
*/



