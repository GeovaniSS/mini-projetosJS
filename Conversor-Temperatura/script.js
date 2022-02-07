const buttonTemp = document.getElementById('button')
const buttonLimpar = document.getElementById('button-limpar')
const resultado = document.getElementById('conversão')

function converterTemp() {
    let tempCelsius = document.getElementById('temp_c')

    if (tempCelsius.value === '') {
        window.alert("[ERRO] Informe a temperatura em °C")
    }
    else {
        C = Number(tempCelsius.value)
        F = C * 1.8 + 32

        resultado.innerHTML = `<strong>${C}°C</strong> é igual a <strong>${F}°F</strong>`  
    }
}

function limparTemp() {
    resultado.innerHTML = ''
    document.getElementById('temp_c').value = ''   
}

buttonTemp.addEventListener('click', converterTemp)
buttonLimpar.addEventListener('click', limparTemp)