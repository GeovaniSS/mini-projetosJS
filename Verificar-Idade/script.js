var verificarIdade = document.getElementById('button') //Botão

function Verificar() {
    var anoAtual = new Date().getFullYear()
    var anodeNascimento = Number(document.getElementById('anoNascimento').value) //Input do ano de nascimento
    var idadedoUsuario = (anoAtual - anodeNascimento) //Cálculo da Idade (Ano atual - Ano de Nascimento)
    var sexodoUsuario = document.querySelector('input[name="sexo"]:checked').value //Input radio 
    var fotoIdade = document.createElement('img') //Criando a imagem
    var mostrarIdade = document.getElementById('mostrarIdade') //Caixa do resultado

    if (anodeNascimento == "" || anodeNascimento > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        mostrarIdade.innerHTML = `Detectamos ${sexodoUsuario} com ${idadedoUsuario} anos.`

        if (sexodoUsuario == "Homem") {  //Condição para o sexo masculino
            if (idadedoUsuario >= 0 && idadedoUsuario < 10) {
                fotoIdade.src = "img/foto-bebe-m.png" //Bebe do sexo masculino
            }
            else if (idadedoUsuario < 21) {
                fotoIdade.src = "img/foto-jovem-m.png" //Jovem do sexo masculino
            }
            else if (idadedoUsuario < 50) {
                fotoIdade.src = "img/foto-adulto-m.png" //Adulto do sexo masculino
            }
            else {
                fotoIdade.src = "img/foto-idoso-m.png" //Idoso do sexo masculino
            }
        } 
        else {
            if (idadedoUsuario >= 0 && idadedoUsuario < 10) {
                fotoIdade.src = "img/foto-bebe-f.png"  //Bebê do sexo feminino
            }
            else if (idadedoUsuario < 21) {
                fotoIdade.src = "img/foto-jovem-f.png"  //Jovem do sexo feminino
            }
            else if (idadedoUsuario < 50) {
                fotoIdade.src = "img/foto-adulto-f.png"  //Adulto do sexo feminino
            }
            else {
                fotoIdade.src = "img/foto-idoso-f.png"  //Idoso do sexo feminino
            }
        }
        mostrarIdade.appendChild(fotoIdade)
    }
}

verificarIdade.addEventListener('click', Verificar) //Evento

