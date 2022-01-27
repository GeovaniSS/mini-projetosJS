let gerarTabuada = document.getElementById('button')

function Tabuada() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('tabuada')

    if (num.value === '') {
        window.alert('[ERRO] digite um número e gere a tabuada')
    }

    else {
        let n = Number(num.value)

        tab.innerHTML = `${n} X 1 = ${n * 1}`
        for (c = 2; c <= 10; c++) {
            tab.innerHTML += `${n} X ${c} = ${n * c}`
        }
    }
}

gerarTabuada.addEventListener('click', Tabuada)
/*let num = 9; 

for (c = 1; c <= 10; c++) {
    console.log(`${num} X ${c} = ${num * c}`)
}
*/