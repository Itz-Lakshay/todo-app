const input = document.getElementById("todo-input")
const addBtn = document.getElementById("add-btn")
const list = document.getElementById("todo-list")
let todos = []

function editTodo(id){
    const todo = todos.find(t => t.id === id)
    let newText = prompt("Enter Your Todo: ",todo.text)
    if(newText === null){
        return
    }

    else if(newText.trim() === ""){
        return
    }

    newText = newText.trim()
    todo.text = newText
    renderTodos()
}

function toggleTodo(id){
    const todo = todos.find(t => t.id === id)
    todo.done = !todo.done
    renderTodos()
}

function deleteTodo(id){
    todos = todos.filter(e => e.id !== id)
    renderTodos()
}

function renderTodos(){
    list.innerHTML = ""

    todos.forEach(e => {
        let li = document.createElement("li")
        let span = document.createElement("span")
        span.textContent = e.text
        li.append(span)
        list.append(li)  

        const delBtn = document.createElement("button")
        delBtn.textContent = "Delete"
        delBtn.addEventListener("click",() => deleteTodo(e.id))

        if(e.done){
            span.classList.add("done")
        }
        span.addEventListener("click",()=>toggleTodo(e.id))

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        
        editBtn.addEventListener("click",()=> editTodo(e.id))

        const btnGroup = document.createElement("div")
        btnGroup.append(editBtn,delBtn)
        li.append(btnGroup)

    });
}

addBtn.addEventListener("click",()=>{
    const text = input.value.trim()
    if(text === ""){
        return
    }
    
    const todo = {
        id:Date.now(),
        text:text,
        done:false
    }
    
    todos.push(todo)
    input.value = ""
    renderTodos()
})


