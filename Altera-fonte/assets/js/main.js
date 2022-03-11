const fontSizeResult = document.querySelector('#font-size-result')
const fontSizeButtons = document.querySelector('.font-sizes')

function fontSize(size) {
    return function() {
        fontSizeResult.style.fontSize = size + 'px'
    }
}

const size8 = fontSize(8)
const size12 = fontSize(12)
const size24 = fontSize(24)
const size36 = fontSize(36)

fontSizeButtons.addEventListener('click', (e) => {
    const el = e.target
    if(el.classList.contains('size-8')) size8()
    if(el.classList.contains('size-12')) size12()
    if(el.classList.contains('size-24')) size24()
    if(el.classList.contains('size-36')) size36()
})