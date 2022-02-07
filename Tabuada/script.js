const gerar = document.getElementById('button') //Botão gerar tabuada
const limpar= document.getElementById('button-limpar') //Botão limpar a tabuada
const tab = document.getElementById('tabuada')  //Referência do Select
const msg = document.createElement('option') //Mensagem da Tabuada

msg.innerHTML = 'Digite um número acima'
tab.appendChild(msg)

function gerarTabuada() {
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

function limparTabuada() {
    tab.innerHTML = ''
    msg.innerHTML = 'Digite outro número'
    tab.appendChild(msg)
}

gerar.addEventListener('click', gerarTabuada)
limpar.addEventListener('click', limparTabuada)

//Atributo multiple