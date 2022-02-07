const recarregarPagina = document.getElementsByTagName('body')

function carregarHorário() {
    const mensagemdoDia = document.getElementById('msg') //Título
    const informarHora = document.getElementById('horas') //Div Horas
    const fotoHora = document.getElementById('foto') //Div Foto
    let foto = document.createElement('img') //Criando imagem pelo JavaScript
    const hora = new Date().getHours()
    const minuto = new Date().getMinutes()
    
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

recarregarPagina.addEventListener('load', carregarHorário())



