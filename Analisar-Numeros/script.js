const adicionar = document.querySelector('input#adicionar') //Botão adicionar
const finalizar = document.querySelector('input#finalizar') //Botão finalizar
const caixadeValores = document.querySelector('select#valores')
const resultado = document.querySelector('div#resultado') //Div do resultado
let valores = [] // O array foi criado no escopo global, pois, caso fosse criado em uma função, a cada chamada o array seria inicializado (limpando os valores)

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
    if (valores.indexOf(valor) != -1) {
        return true
    }
    else {
        valores.push(valor)
        return false
    }
}

function listadeValores (valor) {
    let option = document.createElement('option')
    option.innerHTML = `Valor ${valor} adicionado`
    caixadeValores.appendChild(option)
}

function mostrarResultado() {
    if (valores.length == 0) {
        window.alert('[ERRO] Adicione valores antes de finalizar')
    }
    else {
        //Tamanho do array
        resultado.innerHTML = `Ao todo temos ${valores.length} números cadastrados </br>`

        valores.sort()
        //Maior valor 
        resultado.innerHTML += `O maior valor informado foi ${valores[valores.length -1]}  </br>`

        //Menor valor
        resultado.innerHTML += `O menor valor informado foi ${valores[0]}  </br>`

        //Soma dos valores
        let somaValores = 0
        for (let i in valores) {
            somaValores += valores[i]
        }
        resultado.innerHTML += `Somando todos os valores, temos ${somaValores}  </br>`

        //Média dos valores
        let médiaValores = somaValores / valores.length
        resultado.innerHTML += `A média dos valores digitados é ${médiaValores}  </br>`
        }
}

adicionar.addEventListener('click', adicionarValores)
finalizar.addEventListener('click', mostrarResultado)