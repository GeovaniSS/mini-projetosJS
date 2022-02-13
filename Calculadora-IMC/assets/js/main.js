/*Capturando o evento de submit do form */
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault() //Tira a configuração padrão do evento de submit

    //Caixas que recebem a mensagem de peso/altura inválida
    const invalidWeightMessage = e.target.querySelector('.weightText') 
    const invalidHeightMessage = e.target.querySelector('.heightText') 

    //Inputs do Peso e da Altura
    const inputWeight = e.target.querySelector('#weight')
    const inputHeight = e.target.querySelector('#height')

    //O valor dos inputs Peso e Altura convertidos para Number
    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    //Condição para o input do Peso ser inválido
    if (!weight || invalidWeight(weight)) {
        invalidMessage('Peso inválido', inputWeight, invalidWeightMessage)
    }

    //Condição para o input da Altura ser inválido
    if (!height || invalidHeight(height)) {
        invalidMessage('Altura inválida', inputHeight, invalidHeightMessage)
    }

    //Condição para os inputs do Peso e Altura serem válidos
    if (weight && height && !invalidWeight(weight) && !invalidHeight(height)) {
        const imc = getImc(weight, height)
        const imcStatus = getImcStatus(imc)
        const message = `Seu imc é: ${imc} (${imcStatus})`
        setImcResult(message)  
    }
    
    //Evento que remove a borda vermelha e a mensagem inválida do input Peso
    inputWeight.addEventListener('focus', () =>  {
        inputWeight.classList.remove('invalidMessage')
        invalidWeightMessage.innerHTML = ''
    })

    //Evento que remove a borda vermelha e a mensagem inválida do input Altura
    inputHeight.addEventListener('focus', () => {
        inputHeight.classList.remove('invalidMessage')
        invalidHeightMessage.innerHTML = ''
    })
})

// Função que retorna true se o peso for menor que 2 ou maior que 560
function invalidWeight(weight) {
    if (weight < 2 || weight > 560) {
        return true
    }
    else {
        return false
    }
}

// Função que retorna true se a altura for menor que 0.63 ou maior que 2.63
function invalidHeight(height) {
    if (height < 0.63 || height > 2.63) {
        return true
    }
    else {
        return false
    }
}

/* Função que é executada quando o peso ou a altura são inválidos. Ela cria uma mensagem inválida e muda a cor da borda do input*/
function invalidMessage(msg, input, invalidText) {
    input.classList.add('invalidMessage') //A borda do input fica vermelha

    invalidText.innerHTML = ''
    const message = createMessage(msg)
    invalidText.appendChild(message)
}

// Funçaõ que cria um parágrafo, adiciona um conteúdo e retorna para a chamada
function createMessage(msg) {
    const message = document.createElement('p')
    message.innerHTML = msg
    return message
}

// Função que calcula o IMC 
function getImc(weight, height) {
    const imc = weight / height ** 2
    return imc.toFixed(2)
}

/* Função que retorna o status do IMC e altera a cor da linha da tabela de acordo com o valor do IMC*/
function getImcStatus (imc) {
    const status = ['Magreza', 'Normal', 'Sobrepeso', 'Obesidade', 'Obesidade Grave']
    const imcTable = document.querySelectorAll('table tbody tr')

    for (let i = 1; i < imcTable.length; i++) {
        imcTable[i].classList.remove('active')
    }

    if (imc < 18.5) {
        imcTable[1].classList.add('active')
        return status[0]
    }
    if (imc <= 24.9) {
        imcTable[2].classList.add('active')
        return status[1]
    }
    if (imc <= 29.9) {
        imcTable[3].classList.add('active')
        return status[2]
    } 
    if (imc <= 39.09) {
        imcTable[4].classList.add('active')
        return status[3]
    } 
    if (imc > 40) {
        imcTable[5].classList.add('active')
        return status[4]
    }
}

/* Função que mostra o resultado do IMC*/
function setImcResult (msg) {
    const imcResult = document.querySelector('#result')
    imcResult.innerHTML = ''
    imcResult.style.display = 'flex'

    const message = createMessage(msg)
    imcResult.appendChild(message)
}