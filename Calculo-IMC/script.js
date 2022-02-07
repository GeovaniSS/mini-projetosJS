const verificar = document.getElementById('button') //Botão
const limpar = document.getElementById('button-limpar') //Botão Limpar

function verificarIMC() {
    const peso = document.getElementById('peso').value //Input do peso
    const altura = document.getElementById('altura').value //Input da altura
    let IMC = peso/altura**2 //Calculo do IMC
    const resultadoIMC = document.getElementById('resultadoIMC')
    const valordoIMC = document.getElementById('IMC')

    if (peso === '' || altura === '') {
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

function limparIMC() {
        peso.value = '' //Limpar o input peso
        altura.value = '' //Limpar o input altura

        document.getElementById('table-calc-0').style.backgroundColor='rgb(255, 255, 255)' //Cor padrão
        document.getElementById('table-calc-1').style.backgroundColor='rgb(255, 255, 255)' //Cor padrão
        document.getElementById('table-calc-2').style.backgroundColor='rgb(255, 255, 255)' //Cor padrão
        document.getElementById('table-calc-3').style.backgroundColor='rgb(255, 255, 255)' //Cor padrão
        document.getElementById('table-calc-4').style.backgroundColor='rgb(255, 255, 255)' //Cor padrão

        resultadoIMC.style.display = 'none' //Resultado invisível 
}

verificar.addEventListener('click', verificarIMC)
limpar.addEventListener('click', limparIMC)