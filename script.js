let todoInput
let errorInfo
let addBtn
let ulList
let newTodo
let tools
let btnComplete
let btnEdit
let btnDelete
let icheck
let itimes

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn


const main =() => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () =>{
    todoInput = document.querySelector(".todo-input")
    errorInfo = document.querySelector(".error-info")
    addBtn = document.querySelector(".btn-add")
    ulList = document.querySelector(".todolist ul")
    popup = document.querySelector(".popup")
    popupInfo = document.querySelector(".popup-info")
    popupInput = document.querySelector(".popup-input")
    popupAddBtn = document.querySelector(".accept")
    popupCloseBtn =document.querySelector(".cancel")
}



const prepareDOMEvents = ()=>{
    addBtn.addEventListener("click", addNewTodo)
    ulList.addEventListener("click", checkClick)
    popupCloseBtn.addEventListener("click", closePopup)
}

const addNewTodo = ()=>{
    if(todoInput.value !== ""){
        newTodo = document.createElement("li")
        newTodo.textContent = todoInput.value
        createToolsArea()
        ulList.append(newTodo)
        todoInput.value = ""
        errorInfo.textContent = ""
    }else{
        errorInfo.textContent = "Wpisz tresć zadania!"
    }
}

const createToolsArea = ()=>{
    tools = document.createElement("div")
    tools.classList.add("tools")

    btnComplete = document.createElement('button')
    btnComplete.classList.add("complete")
    icheck = document.createElement("i")
    icheck.classList.add("fas", "fa-check")
    btnComplete.appendChild(icheck)
    tools.appendChild(btnComplete)
    
    btnEdit = document.createElement('button')
    btnEdit.classList.add("edit")
    btnEdit.textContent = "EDIT"
    tools.appendChild(btnEdit)

    btnDelete = document.createElement('button')
    btnDelete.classList.add("delete")
    itimes = document.createElement("i")
    itimes.classList.add("fas", "fa-times")
    btnDelete.appendChild(itimes)
    tools.appendChild(btnDelete)

    newTodo.appendChild(tools)

    



    // <button class="complete"><i class="fas fa-check"></i></button>
    // <button class="edit">EDIT</button>
    // <button class="delete"><i class="fas fa-times"></i></button>
}

const checkClick = e =>{
    if(e.target.matches('.complete')){
        e.target.closest("li").classList.toggle("completed")
        e.target.classList.toggle('completed')
    } else if(e.target.matches('.edit')){editTodo()
}   else if (e.target.matches(".delete")){console.log("delete")}
}

const editTodo = () =>{
    popup.style.display = "flex"
}
const closePopup = () =>{
    popup.style.display = "none"
}


document.addEventListener('DOMContentLoaded', main)

