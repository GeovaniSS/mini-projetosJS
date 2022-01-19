var btnSomar = document.getElementById('soma')
var btnSub = document.getElementById('sub')
var btnMult = document.getElementById('mult')
var btnDiv = document.getElementById('div')

btnSomar.addEventListener('click', function() {
    var n1 = Number(document.getElementById('txtn1').value)
    var n2 = Number(document.getElementById('txtn2').value)
    var txres = document.getElementById('res')
    var res = n1 + n2 
    txres.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${res}`
})

btnSub.addEventListener('click', function () {
    var n1 = Number(document.getElementById('txtn1').value)
    var n2 = Number(document.getElementById('txtn2').value)
    var txres = document.getElementById('res')
    var res = n1 - n2 
    txres.innerHTML = `A subtração entre ${n1} e ${n2} é igual a ${res}`
})

btnMult.addEventListener('click', function () {
    var n1 = Number(document.getElementById('txtn1').value)
    var n2 = Number(document.getElementById('txtn2').value) 
    var txres = document.getElementById('res') 
    var res = n1 * n2 
    txres.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a ${res}`
})

btnDiv.addEventListener('click', function () {
    var n1 = Number(document.getElementById('txtn1').value)
    var n2 = Number(document.getElementById('txtn2').value)   
    var txres = document.getElementById('res')
    var res = n1 / n2 
    txres.innerHTML = `A divisão entre ${n1} e ${n2} é igual a ${res}`
})