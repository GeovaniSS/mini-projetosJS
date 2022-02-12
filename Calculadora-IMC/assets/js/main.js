function myScope() {
    const check = document.querySelector('input#enviar') // Botão Enviar
    const clean = document.querySelector('input#limpar') // Botão Limpar
    const weight = document.querySelector('input#weight') //Input Weight
    const height = document.querySelector('input#height') //Input Height
    const tableIMC = document.querySelectorAll('table tbody tr') // Tabela 
    const result = document.querySelector('div#result') // Div Resultado
    const imcResult = document.createElement('strong') // Resultado IMC

    check.addEventListener('click', checkIMC)
    clean.addEventListener('click', cleanIMC)    
    
    function checkIMC() {
        const weightText = document.querySelector('div#weightText') // Text Weight
        const heightText = document.querySelector('div#heightText') // Text Height
        const messageWeight = createMessage('Peso Inválido') // Peso Inválido
        const messageHeight = createMessage('Altura Inválida') //Altura Inválida

        if (tableShowImc(tableIMC)) {
            window.alert('[ERRO] Limpe os valores para saber novamente')
        }
        
        if (invalidWeight(weight)) {
            weight.style.borderColor = 'red'
            weightText.appendChild(messageWeight)
        }

        if (invalidHeight(height)) {
            height.style.borderColor = 'red'
            heightText.appendChild(messageHeight)
        }

        else {
            const IMC = Number(weight.value) / Number(height.value) ** 2
            const classIMC = ['Magreza', 'Normal', 'Sobrepeso', 'Obesidade', 'Obesidade Grave']
            
            if (IMC < 18.5) {
                tableIMC[1].classList.add('active')
                showIMC(classIMC[0], IMC)
            }
            else if (IMC < 24.9) {
                tableIMC[2].classList.add('active')
                showIMC(classIMC[1], IMC)
            }
            else if (IMC < 29.9) {
                tableIMC[3].classList.add('active')
                showIMC(classIMC[2], IMC)
            }
            else if (IMC < 39,9) {
                tableIMC[4].classList.add('active')
                showIMC(classIMC[3], IMC)
            }
            else {
                tableIMC[5].classList.add('active')
                showIMC(classIMC[4], IMC)
            }
        }

        /*Função que valida se o resultado já foi mostrado na tabela*/
        function tableShowImc(table) {
            for (let i = 1; i < table.length; i++) {
                if (table[i].classList.contains('active')) {
                    return true
                }
            }
        }
        
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
        
        /*Função que valida se o resultado já foi mostrado na tabela*/
        function createMessage(msg) {
            const message = document.createElement('p')
            message.innerHTML = msg
            return message
        }
        
        /*Função que mostra o resultado do IMC*/
        function showIMC(classIMC, IMC) {
            result.style.display = 'flex'
            imcResult.innerHTML = `${IMC.toFixed(2)} (${classIMC})`
            result.appendChild(imcResult)
        }
        
        /*Função que limpa a validação do input Peso*/
        weight.addEventListener('focus', () => {
            weight.style.borderColor = 'initial'
            weightText.removeChild(messageWeight)
        })

        /*Função que limpa a validação do input Altura*/
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
            result.removeChild(imcResult)
        }
    }
}
myScope()