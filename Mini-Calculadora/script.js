document.querySelector('input#soma').addEventListener('click', () => {
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)
    const resultado = document.getElementById('res')
    let res = n1 + n2 
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${res}`
})

document.querySelector('input#sub').addEventListener('click', () => {
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)
    const resultado = document.getElementById('res')
    let res = n1 - n2 
    resultado.innerHTML = `A subtração entre ${n1} e ${n2} é igual a ${res}`
})

document.querySelector('input#mult').addEventListener('click', () => {
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)
    const resultado = document.getElementById('res')
    let res = n1 * n2
    resultado.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a ${res}`
})

document.querySelector('input#div').addEventListener('click', () => {
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)
    const resultado = document.getElementById('res')
    let res = n1 / n2
    resultado.innerHTML = `A divisão entre ${n1} e ${n2} é igual a ${res}`
})