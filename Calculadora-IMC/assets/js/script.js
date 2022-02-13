/*Captura o evento de submit do form */
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault() //Tira a configuração padrão do evento de submit
    
    const weightText = e.target.querySelector('.weightText')
    const heightText = e.target.querySelector('.heightText')

    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        invalidWeight(inputPeso, weightText)
    }

    if (!altura) {
        invalidHeight(inputAltura, heightText)
    }

    if (peso && altura) {
        const imc = getImc(peso, altura)
        const nivelImc = getNivelImc(imc)
        const mensagem = `Seu imc é: ${imc} (${nivelImc})`
        setResultado(mensagem)  
    }
    
    inputPeso.addEventListener('focus', () =>  {
        inputPeso.classList.remove('teste')
        weightText.innerHTML = ''
    })

    inputAltura.addEventListener('focus', () => {
        inputAltura.classList.remove('teste')
        heightText.innerHTML = ''
    })
})

function invalidWeight (inputPeso, weightText) {    
    inputPeso.classList.add('teste')

    weightText.innerHTML = ''
    const mensagem = criarMensagem('Peso inválido')
    weightText.appendChild(mensagem)
}

function invalidHeight (inputAltura, heightText) {
    inputAltura.classList.add('teste')
    
    heightText.innerHTML = ''
    const mensagem = criarMensagem('Altura inválida')
    heightText.appendChild(mensagem)
}

function criarMensagem(msg) {
    const mensagem = document.createElement('p')
    mensagem.innerHTML = msg
    return mensagem
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function getNivelImc (imc) {
    const niveis = ['Magreza', 'Normal', 'Sobrepeso', 'Obesidade', 'Obesidade Grave']
    const tabelaImc = document.querySelectorAll('table tbody tr')

    for (let i = 1; i < tabelaImc.length; i++) {
        tabelaImc[i].classList.remove('active')
    }

    if (imc < 18.5) {
        tabelaImc[1].classList.add('active')
        return niveis[0]
    }
    if (imc <= 24.9) {
        tabelaImc[2].classList.add('active')
        return niveis[1]
    }
    if (imc <= 29.9) {
        tabelaImc[3].classList.add('active')
        return niveis[2]
    } 
    if (imc <= 39.09) {
        tabelaImc[4].classList.add('active')
        return niveis[3]
    } 
    if (imc > 40) {
        tabelaImc[5].classList.add('active')
        return niveis[4]
    }
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    resultado.style.display = 'flex'

    const mensagem = criarMensagem(msg)
    resultado.appendChild(mensagem)
}