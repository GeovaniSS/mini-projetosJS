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

        if(el.classList.contains('btn-number')) this.updateDisplay(el)
        if(el.classList.contains('btn-clear'))  this.clearDisplay()
        if(el.classList.contains('btn-delete')) this.removeDisplay()
        if(el.classList.contains('btn-equal'))  this.resultDisplay()
      })
    },

    handlePressEnter() {
      display.addEventListener('keypress', (e) => {
        if(e.keyCode === 13) {
          this.resultDisplay()
        }
      })
    },

    updateDisplay(el) {
      display.value += el.innerText 
    },
    
    clearDisplay() {
      display.value = ''
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
      }
    }
  }
}

const calculator = createCalculator()
calculator.startCalculator()

