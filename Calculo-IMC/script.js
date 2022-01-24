var verificarIMC = document.getElementById('button') //Botão
var limparIMC = document.getElementById('button-limpar') //Botão Limpar

function mostrarIMC() {
    var peso = document.getElementById('peso').value //Input do peso
    var altura = document.getElementById('altura').value //Input da altura
    var IMC = peso/altura**2 //Calculo do IMC
    var resultadoIMC = document.getElementById('resultadoIMC')
    var valordoIMC = document.getElementById('IMC')

    if (peso == '' || altura == '') {
        window.alert('[ERRO] Informe o (Peso) e a (Altura)')
    }
    else {
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
        valordoIMC.innerHTML = IMC.toFixed(2)
    }
}

function Limpar() {
        peso.value = '' //Limpar o input peso
        altura.value = '' //Limpar o input altura

        document.getElementById('table-calc-0').style.backgroundColor='rgb(255, 255, 255)' //Cor padrão
        document.getElementById('table-calc-1').style.backgroundColor='rgb(255, 255, 255)' //Cor padrão
        document.getElementById('table-calc-2').style.backgroundColor='rgb(255, 255, 255)' //Cor padrão
        document.getElementById('table-calc-3').style.backgroundColor='rgb(255, 255, 255)' //Cor padrão
        document.getElementById('table-calc-4').style.backgroundColor='rgb(255, 255, 255)' //Cor padrão

        resultadoIMC.style.display = 'none' //Resultado invisível 
}

verificarIMC.addEventListener('click', mostrarIMC)
limparIMC.addEventListener('click', Limpar)