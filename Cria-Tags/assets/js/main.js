/*Criar um loop para percorrer o array elementos e adicionar os objetos a section container do HTML */
const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //0
    {tag: 'div', texto: 'Frase 2'}, //1
    {tag: 'footer', texto: 'Frase 3'}, //2
    {tag: 'section', texto: 'Frase 4'} //3
]

const container = document.querySelector('section.container') //Section Container
const caixaElementos = document.createElement('div') //Div que envolve os elementos

/*Chamada para função que adiciona os elementos na caixaElementos (div)*/
adicionarElemento(elementos, caixaElementos) 

/*Function que percorre o array de objetos, cria as tags e o conteúdo e adiciona esses elementos a caixaElementos (div) */
function adicionarElemento(elementos, caixaElementos) {
    for (let i = 0; i < elementos.length; i++) {
        /*let [{tag, texto}] = elementos[i] //!ERRADO*/
        let {tag, texto} = elementos[i] //Atribuição via Desestruturação do Objeto
        const elemento = document.createElement(tag)
        const textoCriado = document.createTextNode(texto)
        /*elemento.innerText = texto*/
        elemento.appendChild(textoCriado) //O texto será adicionado como conteúdo da tag
        caixaElementos.appendChild(elemento)
    }   
} 

container.appendChild(caixaElementos) //Adicionando a div que envolve os elementos (p, div, footer e section) como filho do container (Section)

