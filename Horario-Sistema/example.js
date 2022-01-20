var informarHora = document.getElementById('horas')
var fotoHora = document.getElementById('foto')
var hora = new Date().getHours()
var minuto = new Date().getMinutes()

informarHora.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

if (hora < 12) {
    document.body.style.backgroundColor="yellow"
    fotoHora.innerHTML = '<img src="img/manha.jpg">'

} else if (hora <= 18) {
    document.body.style.backgroundColor="orange"
    fotoHora.innerHTML = '<img src="img/tarde.jpg">'

} else {
    document.body.style.backgroundColor="gray"
    fotoHora.innerHTML = '<img src="img/noite.jpg">'
}



function Dia() {
    document.body.style.backgroundColor="yellow"
    fotoHora.innerHTML = '<img src="img/manha.jpg">'
}

function Tarde() {
    document.body.style.backgroundColor="orange"
    fotoHora.innerHTML = '<img src="img/tarde.jpg">'
}

function Noite() {
    document.body.style.backgroundColor="gray"
    fotoHora.innerHTML = '<img src="img/noite.jpg">'
}

recarregarPagina.addEventListener('load', Dia)
recarregarPagina.addEventListener('load', Tarde)
recarregarPagina.addEventListener('load', Noite)

