
console.log('connected to index.html')

// https://www-1.ecma-international.org/
// ecma script is spesification for programing language



class toDo {
    constructor(task){
let ul = document.createElement('ul')
ul.setAttribute('id', 'ulId')
document.body.appendChild(ul)

let li = document.createElement('li')
document.getElementById('ulId')
ul.appendChild(li)

li.innerText = task

}}

new toDo('brush teeth')
let submit = document.createElement('Button')

submit.innerText = "click me to add todo"

const addtoDo = (task) => {
    new toDo(task)

}
let form = document.createElement('form')
document.body.appendChild(form)
let input = document.createElement('input')
form.appendChild(input)

input.setAttribute('name', "nameInput")

form.appendChild(submit)
form.addEventListener('submit', function (e) {
    addtoDo(e.target[0].value)
    //prevent the normal submission of the form
    e.preventDefault();

    console.log(e.target[0].value);    
});


