function Calculator() {
  const display = document.querySelector('#display')
  const buttons = document.querySelector('.buttons')

  this.startCalculator = () => {
    this.handleButtonClick()
    this.handlePressEnter()
  }

  this.handleButtonClick = () => {
    buttons.addEventListener('click', (e) => {
      const el = e.target
      if(el.classList.contains('btn-clear'))  this.clearDisplay()
      if(el.classList.contains('btn-number')) this.addNumberToDisplay(el.innerText)
      if(el.classList.contains('btn-delete')) this.removeItem()
      if(el.classList.contains('btn-equal'))  this.showResult()
    })
  } 
  
  this.handlePressEnter = () => {
    document.addEventListener('keyup', (e) => {
      if(e.keyCode !== 13) return 
      this.showResult()
    })
  }
  
  this.clearDisplay = () => display.value = ''
  this.addNumberToDisplay = (number) => {
    display.value += number
    display.focus()
  }
  this.removeItem = () => display.value = display.value.slice(0, -1)
  this.showResult = () => {
    try {
      const result = eval(display.value)

      if (!result) return alert('Conta Inválida')

      display.value = result
    } catch(error) {
      alert('Conta Inválida')
    }
  }
}

const calculator = new Calculator()
calculator.startCalculator()

