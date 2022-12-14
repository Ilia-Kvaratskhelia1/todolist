//selector

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
todoButton.addEventListener('click' , addTodo);
todoList.addEventListener('click' , deleteCheck);


function addTodo(event){

    // todo div0
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    // creat li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.append(newTodo);


    //completed or chekmark

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.append(completedButton);

    ///trash button
    
    const trashdButton = document.createElement('button');
    trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashdButton.classList.add("trash-btn");
    todoDiv.append(trashdButton);

        ///append to list

        todoList.append(todoDiv);


        //clear todo input value;

        todoInput.value = '';
        event.preventDefault()


        // delete item
}

function deleteCheck(e){
    const item  =e.target;
    if(item.classList[0] === 'trash-btn'){
        const todo =item.parentElement;
        // Animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend' , function(){
            todo.remove()
        })
    }
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}
