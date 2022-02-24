let currentTime = document.querySelector('#current-time')

function realTime() {
    const data = new Date()
    return data.toLocaleTimeString('pt-BR', {timeStyle:"medium"})
}

setInterval(function() {
    currentTime.innerHTML = realTime()
}, 1000)