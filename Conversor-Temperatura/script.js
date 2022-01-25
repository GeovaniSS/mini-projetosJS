let buttonTemp = document.getElementById('button')
let buttonLimpar = document.getElementById('button-limpar')
let resultado = document.getElementById('conversão')

function Converter() {
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

function Limpar() {
    resultado.innerHTML = ''
    document.getElementById('temp_c').value = ''   
}

buttonTemp.addEventListener('click', Converter)
buttonLimpar.addEventListener('click', Limpar)