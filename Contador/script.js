const contar = document.getElementById('button')

function Contagem() {
    let inicio = document.getElementById('inicio') //Input inicio
    let fim = document.getElementById('fim') //Input fim
    let passo = document.getElementById('passo') //Input passo
    let resultado = document.getElementById('resultado') //Div resultado

    if (inicio.value === '' || fim.value === '' || passo.value === '') {
        resultado.innerHTML = "Impossível contar"
    } 

    else {
        resultado.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0)// Verificar a condição do passo ser maior que o inicio ou final
        {
            window.alert('Passo inválido, considerando PASSO 1')
            p = 1
        }

        if (i < f) { //Contagem Progressiva
            for (let c = i; c <= f; c+=p) {
                resultado.innerHTML += `${c}👉`
            }
        }

        else { //Contagem Regressiva
            for (let c = i; c >= f; c-=p) {
                resultado.innerHTML += `${c}👉`
            }         
        }
        resultado.innerHTML += '🏁'
    }
}
contar.addEventListener('click', contagem)
