const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
const colorBody = estilosBody.color 

/*for (let i in ps) {
    ps[i].style.backgroundColor = backgroundColorBody;
    ps[i].style.color = colorBody;
}*/

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = colorBody
}