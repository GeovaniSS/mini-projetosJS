var gerarTabuada = document.getElementById('button') //Botão gerar tabuada
var limparTabuada = document.getElementById('button-limpar') //Botão limpar a tabuada
var tab = document.getElementById('tabuada')  //Referência do Select
var msg = document.createElement('option') //Mensagem da Tabuada

msg.innerHTML = 'Digite um número acima'
tab.appendChild(msg)

function Tabuada() {
    let num = document.getElementById('numero') //Input número

    if (num.value === '') {
        window.alert('Por favor, digite um número!')
    }

    else {
        tab.removeChild(msg)
        let n = Number(num.value)
       
        for (c = 1; c <= 10; c++) {
            let resultadoTabuada = document.createElement('option')
            resultadoTabuada.innerHTML += `${n} X ${c} = ${n * c}`
            tab.appendChild(resultadoTabuada)
        }
    }
}

function Limpar() {
    tab.innerHTML = ''
    msg.innerHTML = 'Digite outro número'
    tab.appendChild(msg)
}

gerarTabuada.addEventListener('click', Tabuada)
limparTabuada.addEventListener('click', Limpar)

//Atributo multiple