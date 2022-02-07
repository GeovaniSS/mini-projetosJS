const adicionar = document.querySelector('input#adicionar')
const finalizar = document.querySelector('input#finalizar')
let array = [] // Variável Global

function adicionarValores() {
    resultado.innerHTML = ''
    let valor = document.querySelector('input#numero').value

    if (valor === '') {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    else {
        v = Number(valor)

        if (v >= 1 && v <= 100) {
            let númeroRepetido = vetordeValores(v)
            if (númeroRepetido == true) {
                window.alert('Valor inválido ou já encontrado na lista')
            }
            else {
                listadeValores(v)
            }
        }
        else {
            window.alert('[ERRO] Digite um número entre 0 e 100')
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
        const resultado = document.querySelector('div#resultado')

        //Tamanho do Array
        resultado.innerHTML = `Ao todo temos ${array.length} números cadastrados </br>`

        //Maior valor 
        array.sort()
        resultado.innerHTML += `O maior valor informado foi ${array[array.length -1]}  </br>`

        //Menor valor
        resultado.innerHTML += `O menor valor informado foi ${array[0]}  </br>`

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
}

adicionar.addEventListener('click', adicionarValores)
finalizar.addEventListener('click', mostrarResultado)