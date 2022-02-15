const data = new Date()
const timeText = document.querySelector('.current-time h1')

timeText.innerHTML = (
`${data.toLocaleDateString('pt-BR', {dataStyle: "full", day:"numeric",weekday:"long", month:"long", year:"numeric"})}
${data.toLocaleTimeString('pt-BR', {timeStyle: "short"})}`)

