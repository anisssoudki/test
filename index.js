const form = document.createElement('form')

function append(arg) {
    document.body.appendChild(arg)

}
const input = document.createElement('input')
const submitButton = document.createElement('button')
submitButton.innerText = 'Submit'
form.appendChild(input)
form.appendChild(submitButton)
append(form)
const ul = document.createElement('ul')
append(ul)


form.addEventListener('submit', function (e) {
    
    //prevent the normal submission of the form
    e.preventDefault();
new Todo(e.target[0].value)
    console.log(e.target[0].value);  
    e.target[0].value = " "
});

    


class Todo {
   
    constructor(todo) {
        this.todo = todo
        const li = document.createElement('li')
        li.innerText = todo
        let deleteTodoButton = document.createElement('button') 
        deleteTodoButton.innerText = `delete ${todo}`

        ul.appendChild(li)
        ul.appendChild(deleteTodoButton)
   
        deleteTodoButton.addEventListener("click", function(e){
            console.log(e)
            e.target.previousElementSibling.remove()
            e.target.remove()
           
          
        })
    }
  

  
}
