var recarregarPagina = document.getElementsByTagName('body')

function Carregar() {
    var informarHora = document.getElementById('horas')
    var fotoHora = document.getElementById('foto')
    var mensagemdoDia = document.getElementById('msg')
    var hora = new Date().getHours()
    var minuto = new Date().getMinutes()
    informarHora.innerHTML = `Agora são ${hora} horas e ${minuto}minutos`

    if (hora < 12) {
        document.body.style.backgroundColor="#e2cd9f"
        mensagemdoDia.innerHTML = 'Bom dia!'
        fotoHora.innerHTML = '<img src="img/manha.jpg">'
    
    } else if (hora <= 18) {
        document.body.style.backgroundColor="#b9846f"
        mensagemdoDia.innerHTML = 'Boa tarde!'
        fotoHora.innerHTML = '<img src="img/tarde.jpg">'
    
    } else {
        document.body.style.backgroundColor="#515154"
        mensagemdoDia.innerHTML = 'Boa noite!'
        fotoHora.innerHTML = '<img src="img/noite.jpg">'
    }
}

recarregarPagina.addEventListener('load', Carregar())



