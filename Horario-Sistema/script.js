var recarregarPagina = document.getElementsByTagName('body')

function Carregar() {
    var informarHora = document.getElementById('horas')
    var foto = document.createElement('img')
    var fotoHora = document.getElementById('foto')
    var mensagemdoDia = document.getElementById('msg')
    var hora = new Date().getHours()
    var minuto = new Date().getMinutes()
    
    informarHora.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
 
    if (hora < 12) {
        document.body.style.backgroundColor="#e2cd9f"
        mensagemdoDia.innerHTML = 'Bom dia!'
        foto.src = 'img/manha.jpg'
        
    } else if (hora <= 18) {
        document.body.style.backgroundColor="#b9846f"
        mensagemdoDia.innerHTML = 'Boa tarde!'
        foto.src = 'img/tarde.jpg'
    
    } else {
        document.body.style.backgroundColor="#515154"
        mensagemdoDia.innerHTML = 'Boa noite!'
        foto.src = 'img/noite.jpg'
    }
    fotoHora.appendChild(foto)
}

recarregarPagina.addEventListener('load', Carregar())



