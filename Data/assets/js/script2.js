function createData() {
    const data = new Date()
    const weekDay = getWeekDay(data)
    const monthDay = addZeroLeft(data.getDate())
    const month = getMonth(data)
    const year = data.getFullYear()
    const hour = addZeroLeft(data.getHours())
    const minutes = addZeroLeft(data.getMinutes())
    const time = `${weekDay}, ${monthDay} de ${month} de ${year} ${hour}:${minutes}`
    setTime(time)
}

function getWeekDay(data) {
    /*Dia da Semana - de 0 a 6 */
    const weekDay = data.getDay()
    /*Array que armazena os dias da semana*/
    const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    /*O número retornado pelo getDay() foi usado como índice do array */
    return weekDays[weekDay]
}

function addZeroLeft(num) {
    return num >= 10 ? num : `0${num}`
    /*Se o número for maior ou igual que 10, a função retorna o número sem alteração*/
    /*Se o número for menor que 10, a função retorna o número com um zero a esquerda*/
}

function getMonth(data) {
    /*Meses = 0 a 11*/
    const month = data.getMonth()
    /*Array para armazenar os meses do ano */
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    /*O número retornado pelo getMonth() foi usado como índice do array */
    return months[month]
}

function setTime(time) {
    const currentTime = document.querySelector('.current-time h1')
    currentTime.innerHTML = time
}  