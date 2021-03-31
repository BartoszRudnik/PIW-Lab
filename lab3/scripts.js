//selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

//event listeners
toDoButton.addEventListener('click', addToDoItem);
toDoList.addEventListener('click', deleteCheck);


//functions
function addToDoItem(event){
    event.preventDefault();
    
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    const newToDoItem = document.createElement("li");
    newToDoItem.innerText = toDoInput.value;
    newToDoItem.classList.add("todo-item");

    toDoDiv.appendChild(newToDoItem);

    const doneButton = document.createElement("button");
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add("complete-btn");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    
    toDoDiv.appendChild(doneButton);
    toDoDiv.appendChild(deleteButton);

    if(toDoInput.value != ""){
        toDoList.appendChild(toDoDiv);
        toDoInput.value = "";
    }

}

function deleteCheck(event){

    const item = event.target;

    if(item.classList[0] === "delete-btn"){

        const task = item.parentElement;

        task.classList.add("fall");
        
        task.addEventListener('transitionend', function(){
            task.remove();
        });

    }

    if(item.classList[0] === "complete-btn"){

        const task = item.parentElement;

        task.classList.toggle("completed");

    }

    if(item.classList[0] === "todo-item"){

        const task = item.parentElement;

        task.classList.toggle("completed");

    }

}