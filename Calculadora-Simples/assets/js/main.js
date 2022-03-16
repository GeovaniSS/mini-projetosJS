// Utilizar uma função fábrica (1 apenas) para criar o objeto da calculadora. A Calculadora inteira vai ser um objeto
// Utilizar try, cat e throw para tratar erros
// Quando não conseguir realizar a conta, um alerta será dado para o usuário com "Conta Inválida"
// Criar todas as funcionalidades dentro da função fábrica (factory)
// Revisar o método slice de strings
// Estudar um pouco sobre o método eval()
// Revisar as explicações do Luís Otávio
const createCalculator = () => {
  const display = document.querySelector('#display')
  const buttons = document.querySelector('.buttons')

  return {
    startCalculator() {
      this.handleNumberButtonClick()
      this.handlePressEnter()
    },

    handleNumberButtonClick() {
      buttons.addEventListener('click', (e) => {
        const el = e.target
  
        if (el.classList.contains('btn-number')) this.updateDisplay(el)
        if(el.classList.contains('btn-clear')) this.clearDisplay()
        if(el.classList.contains('btn-delete')) this.removeDisplay()
        if(el.classList.contains('btn-equal')) this.resultDisplay()
      })
    },

    handlePressEnter() {
      display.addEventListener('keypress', (e) => {
        if(e.keyCode === 13) {
          this.resultDisplay()
        }
      })
    },

    clearDisplay() {
      display.value = ''
    },

    updateDisplay(el) {
      display.value += el.innerText 
    },

    removeDisplay() {
      display.value = display.value.slice(0, -1)
    },

    resultDisplay() {
      try {
        const result = eval(display.value)

        if(!result) return alert('Conta inválida')

        display.value = result
      } catch(error) {
        alert('Conta Inválida')
        display.value = ''
      }
    }
  }
}

const calculator = createCalculator()
calculator.startCalculator()

