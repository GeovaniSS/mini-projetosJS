function createData() {
    const data = new Date()
    const weekDay = getWeekDay(data)
    const monthDay = addZeroToHour(data.getDate())
    const month = getMonth(data)
    const year = data.getFullYear()
    const hour = addZeroToHour(data.getHours())
    const minutes = addZeroToHour(data.getMinutes())
    const time = `${weekDay}, ${monthDay} de ${month} de ${year} ${hour}:${minutes}`
    setTime(time)
}

function getWeekDay(data) {
    const weekDay = data.getDay()
    switch (weekDay) {
        case 0: 
            return 'Domingo'
        case 1: 
            return 'Segunda-feira'
        case 2: 
            return 'Terça-feira'
        case 3: 
            return 'Quarta-feira'
        case 4: 
            return 'Quinta-feira'
        case 5: 
            return 'Sexta-feira'
        case 6: 
            return 'Sábado'
    }
}

function addZeroToHour(num) {
    return num >= 10 ? num : `0${num}`
}

function getMonth(data) {
    const month = data.getMonth()
    switch (month) {
        case 0: 
            return 'Janeiro'
        case 1: 
            return 'Fevereiro'
        case 2: 
            return 'Março'
        case 3: 
            return 'Abril'
        case 4: 
            return 'Maio'
        case 5: 
            return 'Junho'
        case 6: 
            return 'Julho'
        case 7: 
            return 'Agosto'
        case 8: 
            return 'Setembro'
        case 9: 
            return 'Outubro'
        case 10: 
            return 'Novembro'
        case 11: 
            return 'Dezembro'    
    }
}

function setTime(time) {
    const currentTime = document.querySelector('.current-time h1')
    currentTime.innerHTML = time
}  