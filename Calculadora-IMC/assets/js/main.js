function myScope() {
    const weightText = document.querySelector('div#weightText') // Text Weight
    const heightText = document.querySelector('div#heightText') // Text Height
    const messageWeight = document.createElement('p') // Peso Inválido
    const messageHeight = document.createElement('p') // Altura Inválida
    const weight = document.querySelector('input#weight') //Input Weight
    const height = document.querySelector('input#height') //Input Height
    const tableIMC = document.querySelectorAll('table tbody tr') // Tabela 
    const enviar = document.querySelector('input#enviar') // Botão Enviar
    const limpar = document.querySelector('input#limpar') // Botão Limpar
    const result = document.querySelector('div#result') // Div Resultado
    const strong = document.createElement('strong') // Resultado IMC

    enviar.addEventListener('click', checkIMC)
    limpar.addEventListener('click', cleanIMC)

    function checkIMC() {
        /* 2kg > weight < 595kg*/
        function invalidWeight(weight) {
            if (weight.value === '' || Number(weight.value) < 2 || Number(weight.value) > 595) {
                return true
            }
            else {
                return false
            }
        }

         /* 0.63 > height < 2.51m*/
        function invalidHeight(height) {
            if (height.value === '' || Number(height.value) < 0.63 || Number(height.value) > 2.51) {
                return true
            }
            else {
                return false
            }
        }
        
        if (invalidWeight(weight)) {
            weight.style.borderColor = 'red'
            messageWeight.innerHTML = 'Peso inválido'
            weightText.appendChild(messageWeight)
        }

        if (invalidHeight(height)) {
            height.style.borderColor = 'red'
            messageHeight.innerHTML = 'Altura Inválida'
            heightText.appendChild(messageHeight)
        }

        else {
            const IMC = Number(weight.value) / Number(height.value) ** 2
            const classIMC = ['Magreza', 'Normal', 'Sobrepeso', 'Obesidade', 'Obesidade Grave']
            
            if (IMC < 18.5) {
                tableIMC[1].classList.add('active')
                imcResult(classIMC[0], IMC)
            }
            else if (IMC < 24.9) {
                tableIMC[2].classList.add('active')
                imcResult(classIMC[1], IMC)
            }
            else if (IMC < 29.9) {
                tableIMC[3].classList.add('active')
                imcResult(classIMC[2], IMC)
            }
            else if (IMC < 39,9) {
                tableIMC[4].classList.add('active')
                imcResult(classIMC[3], IMC)
            }
            else {
                tableIMC[5].classList.add('active')
                imcResult(classIMC[4], IMC)
            }

            function imcResult(classIMC, IMC) {
                result.style.display = 'flex'
                strong.innerHTML = `${IMC.toFixed(2)} (${classIMC})`
                result.appendChild(strong)
            }
        }

        weight.addEventListener('focus', () => {
            weight.style.borderColor = 'initial'
            weightText.removeChild(messageWeight)
        })

        height.addEventListener('focus', () => {
            height.style.borderColor = 'initial'
            heightText.removeChild(messageHeight)
        })
    }

    function cleanIMC() {
        if (weight.value === '' || height.value === '') {
            window.alert('Digite valores antes de limpar')
        }
        else {
            weight.value = ''
            height.value = ''
            
            for (let i = 1; i < tableIMC.length; i++) {
                tableIMC[i].classList.remove('active')
            }   

            result.style.display = 'none'
            result.removeChild('strong')
        }
    }
}
myScope()