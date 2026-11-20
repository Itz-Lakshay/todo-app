const input = document.getElementById("todo-input")
const addBtn = document.getElementById("add-btn")
const list = document.getElementById("todo-list")
let todos = []

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
        li.append(delBtn)
        delBtn.addEventListener("click",() => deleteTodo(e.id))
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


