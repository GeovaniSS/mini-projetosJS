function myScope() {
    const check = document.querySelector('#button-verificar') //Botão Verificar
    const reset = document.querySelector('#button-limpar') //Botão Limpar
    const tableImc = document.querySelectorAll('table tbody tr') //Linhas da Tabela
    const weight = document.querySelector('#peso') //Input peso
    const height = document.querySelector('#altura') //Input altura
    const result = document.querySelector('div#resultadoIMC') //Div Resultado
    const imcResult = document.createElement('strong') // Resultado do IMC

    check.addEventListener('click', checkIMC)
    reset.addEventListener('click', resetIMC)

    /* Função que valida se o IMC pode ser calculado ou não 
        - Se os inputs peso e altura forem vazios, o IMC não é calculável
        - Se os inputs peso e altura não forem vazios, o IMC é calculável
    */
    function isCalculate (weight, height) {
        if (weight.value !== '' || height.value !== '') {
            return true
        }
        else {
            return false
        }
    }

    /* Função que valida se o IMC já foi calculado
        - Se a table tr possui uma classe active o IMC já foi calculado e a função
        retorna true
    */
    function tableShowImc (table) { 
        for (let i = 1; i < table.length; i++) {
            if (table[i].classList.contains('active')) {
                return true
            }
        }
    }

    //Função que Calcula o IMC
    function checkIMC() {
        if (!isCalculate(weight, height)) {
            window.alert('[ERRO] Digite o peso e a altura para saber seu IMC')
        }
        else if (tableShowImc(tableImc)) {
            window.alert('[ERRO] IMC já encontrado, clique no botão limpar')
        }
        else {
            const IMC = Number(weight.value) / Number(height.value) ** 2
            
            result.style.display = 'flex'
            imcResult.innerHTML = `${IMC.toFixed(2)}`
            result.appendChild(imcResult)

            if (IMC < 18.5) {
                tableImc[1].classList.toggle('active')
            }
            else if (IMC < 24.9) {
                tableImc[2].classList.toggle('active')
            }
            else if (IMC < 30) {
                tableImc[3].classList.toggle('active')
            }
            else if (IMC < 40) {
                tableImc[4].classList.toggle('active')
            }
            else {
                tableImc[5].classList.toggle('active')
            }            
        }
    }

    //Função que Limpa o IMC
    function resetIMC() {
        if (weight.value == '' || height.value == '') {
            window.alert('[ERRO] Digite o peso e a altura antes de limpar')
        }
        else {
            result.style.display = 'none'
            result.removeChild(imcResult)
            weight.value = ''
            height.value = ''
            weight.focus()
    
            for (let i = 1; i < tableImc.length; i++) {
                tableImc[i].classList.remove('active')
            }
        }
    }
}
myScope()