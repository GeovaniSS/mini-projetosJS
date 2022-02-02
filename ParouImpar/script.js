const verificar = document.getElementById('button')

function parOuImpar() {
    let numero = document.getElementById('numero').value
    const resultado = document.getElementById('resultado')

    if (numero === '') {
        alert('[ERRO] Digite um número para ver o resultado')
    }
    else {    
        numero = Number(numero)  
        if (numero % 2 == 0) {
            resultado.innerHTML = `O número ${numero} é par`
        }
        else {
            resultado.innerHTML = `O número ${numero} é ímpar`
        }
    }

}

verificar.addEventListener('click', parOuImpar)