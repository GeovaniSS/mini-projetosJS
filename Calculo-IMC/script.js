var verificarIMC = document.getElementById('button') //Botão

function mostrarIMC() {
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var IMC = peso/altura**2
    var resultadoIMC = document.getElementById('resultadoIMC')
    var textoIMC = document.getElementById('IMC')

    textoIMC.innerHTML = IMC.toFixed(2)

    if (IMC < 18.5) {
        document.getElementById('table-calc-0').style.backgroundColor='rgb(235, 253, 234)'
    }
    else if (IMC <= 24.9) {
        document.getElementById('table-calc-1').style.backgroundColor='rgb(235, 253, 234)'
    }
    else if (IMC <= 29.9) {
        document.getElementById('table-calc-2').style.backgroundColor='rgb(235, 253, 234)'
    }
    else if (IMC <= 39.9) {
        document.getElementById('table-calc-3').style.backgroundColor='rgb(235, 253, 234)'
    }
    else {
        document.getElementById('table-calc-4').style.backgroundColor='rgb(235, 253, 234)'
    }

    resultadoIMC.style.display = 'flex' //Aparecer o resultado do IMC com o valor do IMC

}

verificarIMC.addEventListener('click', mostrarIMC)