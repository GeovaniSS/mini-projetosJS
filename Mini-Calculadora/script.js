var txn1 = document.getElementById('txtn1')
var txn2 = document.getElementById('txtn2')
var txres = document.getElementById('res')
var btnSomar = document.getElementById('soma')
var btnSub = document.getElementById('sub')
var btnMult = document.getElementById('mult')
var btnDiv = document.getElementById('div')

btnSomar.addEventListener('click', function() {
    var n1 = Number(txn1.value)
    var n2 = Number(txn2.value)
    var res = n1 + n2 
    txres.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${res}`
})

btnSub.addEventListener('click', function () {
    var n1 = Number(txn1.value)
    var n2 = Number(txn2.value)
    var res = n1 - n2 
    txres.innerHTML = `A subtração entre ${n1} e ${n2} é igual a ${res}`
})

btnMult.addEventListener('click', function () {
    var n1 = Number(txn1.value)
    var n2 = Number(txn2.value)
    var res = n1 * n2 
    txres.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a ${res}`
})

btnDiv.addEventListener('click', function () {
    var n1 = Number(txn1.value)
    var n2 = Number(txn2.value)
    var res = n1 / n2 
    txres.innerHTML = `A divisão entre ${n1} e ${n2} é igual a ${res}`
})