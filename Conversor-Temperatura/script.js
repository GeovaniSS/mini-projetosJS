var buttonTemp = document.getElementById('button')
var buttonLimpar = document.getElementById('button-limpar')
var resultado = document.getElementById('conversão')

function Converter() {
    var tempCelsius = Number(document.getElementById('temp_c').value)
    var tempFahrenheit = tempCelsius * 1.8 + 32
    resultado.innerHTML = `<strong>${tempCelsius}°C</strong> é igual a <strong>${tempFahrenheit}°F</strong>`    
}

function Limpar() {
    resultado.innerHTML = ''
    document.getElementById('temp_c').value = ''   
}

buttonTemp.addEventListener('click', Converter)
buttonLimpar.addEventListener('click', Limpar)