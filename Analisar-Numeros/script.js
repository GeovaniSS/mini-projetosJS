const adicionar = document.querySelector('input#adicionar') //Botão adicionar
const finalizar = document.querySelector('input#finalizar') //Botão finalizar
const resultado = document.querySelector('div#resultado') //Div do resultado
let array = [] // O array foi criado no escopo global, pois, caso fosse criado em uma função, a cada chamada o array seria inicializado (limpando os valores)

function adicionarValores() {
    resultado.innerHTML = ''
    let valor = document.querySelector('input#numero').value //Input do número

    if (valor === '') {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    else {
        let valorDigitado = Number(valor)

        if (valorDigitado >= 1 && valorDigitado <= 100) {
            let valorRepetido = vetordeValores(valorDigitado)
            if (valorRepetido == true) {
                window.alert('Valor inválido ou já encontrado na lista')
            }
            else {
                listadeValores(valorDigitado)
            }
        }
        else {
            window.alert('[ERRO] Digite um número entre 1 e 100')
        }    
    } 
}

function vetordeValores(valor) {
    if (array.indexOf(valor) == -1) {
        array.push(valor)
        return false
    }
    else {
        return true
    }
}

function listadeValores (valor) {
    const caixadeValores = document.querySelector('select#valores')
    let option = document.createElement('option')
    option.innerHTML = `Valor ${valor} adicionado`
    caixadeValores.appendChild(option)
}

function mostrarResultado() {
    if (array.length == 0) {
        window.alert('[ERRO] Adicione valores antes de finalizar')
    }
    else {
        tamanhoArray()
        maioreMenor()
        somaeMédia()
    }
}

function tamanhoArray() {
    resultado.innerHTML = `Ao todo temos ${array.length} números cadastrados </br>`
}

function maioreMenor() {
    array.sort()
    //Maior valor 
    resultado.innerHTML += `O maior valor informado foi ${array[array.length -1]}  </br>`

    //Menor valor
    resultado.innerHTML += `O menor valor informado foi ${array[0]}  </br>`
}

function somaeMédia() {
    //Soma dos valores
    let somaValores = 0
    for (let i = 0; i < array.length; i++) {
        somaValores = somaValores + array[i]
    }
    resultado.innerHTML += `Somando todos os valores, temos ${somaValores}  </br>`

    //Média dos valores
    let médiaValores = somaValores / array.length
    resultado.innerHTML += `A média dos valores digitados é ${médiaValores}  </br>`
}

adicionar.addEventListener('click', adicionarValores)
finalizar.addEventListener('click', mostrarResultado)