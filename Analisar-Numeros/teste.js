const adicionar = document.querySelector('input#adicionar') //Botão adicionar
const finalizar = document.querySelector('input#finalizar') //Botão finalizar
const caixadeValores = document.querySelector('select#valores')
const resultado = document.querySelector('div#resultado') //Div do resultado
let valores = [] // O array foi criado no escopo global, pois, caso fosse criado em uma função, a cada chamada o array seria inicializado (limpando os valores)

function isNumber(n) {
    if (Number(n.value) >= 1 && Number(n.value) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inList (n, vetor) {
    if (vetor.indexOf(Number(n.value)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionarValores() {
    let valor = document.querySelector('input#numero') //Input do número

    if (isNumber(valor) && !inList(valor, valores)) {
        valores.push(Number(valor.value))
        let item = document.createElement('option')
        item.innerHTML = `Valor ${valor.value} adicionado`
        caixadeValores.appendChild(item)
        resultado.innerHTML = '' // Quando o elemento for adicionado, o resultado vai ser limpado
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    valor.value  = ''
    valor.focus() //Foca no input do número
}

function mostrarResultado() {
    if (valores.length == 0) {
        window.alert('[ERRO] Adicione valores antes de finalizar')
    }
    else {
        //Tamanho do Array
        resultado.innerHTML = `<p> Ao todo temos ${valores.length} números cadastrados</p> </br>`

        valores.sort()
        //Maior valor 
        resultado.innerHTML += `<p> O maior valor informado foi ${valores[valores.length -1]}</p>  </br>`
    
        //Menor valor
        resultado.innerHTML += `<p> O menor valor informado foi ${valores[0]}</p>  </br>`

        //Soma dos valores
        let somaValores = 0
        for (let pos in valores) {
            somaValores += valores[pos]
        }
        resultado.innerHTML += `<p> Somando todos os valores, temos ${somaValores}</p>  </br>`

        //Média dos valores
        let médiaValores = somaValores / valores.length
        resultado.innerHTML += `<p> A média dos valores digitados é ${médiaValores}</p>  </br>`
    }
}

adicionar.addEventListener('click', adicionarValores)
finalizar.addEventListener('click', mostrarResultado)