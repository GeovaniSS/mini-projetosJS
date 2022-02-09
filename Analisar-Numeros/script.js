function meuEscopo() {
    const adicionar = document.querySelector('input#adicionar')
    const finalizar = document.querySelector('input#finalizar')
    const caixaDeValores = document.querySelector('select#valores')
    const resultado = document.querySelector('div#resultado')
    const valores = []

    adicionar.addEventListener('click', adicionarValores)
    finalizar.addEventListener('click', mostrarResultado)

    function isNumber(n) {
        if (Number(n.value) >= 1 && Number(n.value) <= 100){
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
        const valor = document.querySelector('input#numero')

        if (isNumber(valor) && !inList(valor, valores)) {
            valores.push(Number(valor.value))
            const item = document.createElement('option')
            item.innerHTML = `Valor ${valor.value} adicionado`
            caixaDeValores.appendChild(item)
            resultado.innerHTML = ''
        }
        else {
            window.alert('Valor inválido ou já encontrado na lista')
        }
        valor.value = ''
        valor.focus()
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
}
meuEscopo()