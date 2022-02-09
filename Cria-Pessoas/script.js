function myScope() {
    const form = document.querySelector('.form')
    const result = document.querySelector('div#result')
    const people = [] //Array inicia vazio

    form.addEventListener('submit', formEvent)

    function formEvent(event) {
        event.preventDefault() //Essa linha de código previne o carregamento automático da página toda vez que o formulário é enviado

        const firstName = form.querySelector('.firstname').value //Input name
        const lastName = form.querySelector('.lastname').value //Input lastname
        const weight = form.querySelector('.weight').value //Input weight
        const height = form.querySelector('.height').value //Input height

        if (isPerson(firstName, lastName, weight, height)) {
            const person = createPerson(firstName, lastName, weight, height)
            people.push(person)
            result.innerHTML += `<p>${person.name} ${person.lastname} ${person.weight} ${person.height}</p>`
            console.log(people)
        }
        else {
            window.alert('[ERRO] Digite todos os valores')
        }
    }

    //Função que valida se o usuário digitou todos os campos
    function isPerson(name, lname, weight, height) {
        if (name === '' || lname === '' || weight === '' || height === '') {
            return false
        }
        else {
            return true
        }
    }
    
    //Função Fábrica que cria o objeto person 
    function createPerson(name, lastname, weight, height) {
        return {
            name,
            lastname,
            weight,
            height
        }
    }
} 
myScope()