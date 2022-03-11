const fontResult = document.querySelector('#font-result')
const fontColorButtons = document.querySelector('.font-colors')
const fontSizeButtons = document.querySelector('.font-sizes')

function changeColor(color) {
    return function() {
        fontResult.style.color = color
    }
}

const red = changeColor('red')
const blue = changeColor('blue')
const yellow = changeColor('yellow')
const green = changeColor('green')


function changeSize(size) {
    return function() {
        fontResult.style.fontSize = size + 'px'
    }
}

const size8 = changeSize(8)
const size12 = changeSize(12)
const size24 = changeSize(24)
const size36 = changeSize(36)

fontColorButtons.addEventListener('click', (e) => {
    const el = e.target
    if(el.classList.contains('red'))    red()
    if(el.classList.contains('blue'))   blue()
    if(el.classList.contains('yellow')) yellow()
    if(el.classList.contains('green'))  green()
})

fontSizeButtons.addEventListener('click', (e) => {
    const el = e.target
    if(el.classList.contains('size-8'))  size8()
    if(el.classList.contains('size-12')) size12()
    if(el.classList.contains('size-24')) size24()
    if(el.classList.contains('size-36')) size36()
})