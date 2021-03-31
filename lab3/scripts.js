const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

let trashClone;

toDoButton.addEventListener('click', addToDoItem);
toDoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);

function addToDoItem(event) {
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

    if (toDoInput.value != "") {
        toDoList.appendChild(toDoDiv);
        toDoInput.value = "";
    }

}

$(document).ready(function() {
    $("#btnRestore").click(function(){        
        $('.todo-list').append(trashClone);
    }); 
});

function deleteCheck(event) {

    const item = event.target;

    if (item.classList[0] === "delete-btn") {

        document.getElementById("btnRestore").disabled = false;

        const task = item.parentElement;
        trashClone = $(task).clone(true);

        $('body').append(
            `<div id="deleteModal" class="delete-modal">                
                <div class="modal-content"> 
                    <label class="modal-header"> Czy na pewno chcesz usunac? </label>                                   
                    <button type="button" id="acceptDelete" class="accept-delete">
                        Usun
                    </button>
                    <button type="button" id="cancelDelete" class="cancel-delete">
                        Anuluj
                    </button>
                </div>                
          </div>`
        );
        $('#deleteModal').click((event) => {
            if ($(event.target).attr('id') === 'acceptDelete') {
                task.classList.add("fall");
                task.addEventListener('transitionend', function () {
                    const listElement = $(item).closest('div');                                     
                    $(listElement).remove();
                });
                $('#deleteModal').remove();
            } else if ($(event.target).attr('id') === 'cancelDelete') {
                $('#deleteModal').remove();
            }
        });
    }

    if (item.classList[0] === "complete-btn") {

        const task = item.parentElement;

        task.classList.toggle("completed");

        showDate(item);

    }

    if (item.classList[0] === "todo-item") {

        const task = item.parentElement;

        task.classList.toggle("completed");

        showDate(item);

    }

}

function showDate(item) {

    var date = new Date();

    if (item.parentElement.classList.contains('completed')) {

        const dateLabel = document.createElement("label");
        var text = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

        dateLabel.innerHTML = text;
        dateLabel.classList.add("date-label");

        item.parentElement.appendChild(dateLabel);

    }

    if (!item.parentElement.classList.contains('completed')) {
        item.parentElement.removeChild(item.parentElement.lastChild);
    }

}

function filterToDo(event) {

    const allTasks = toDoList.childNodes;

    for (var i = 0; i < allTasks.length; i += 1) {
        switch (event.target.value) {
            case "all":
                allTasks[i].style.display = "flex";
                break;
            case "completed":
                if (allTasks[i].classList.contains("completed")) {
                    allTasks[i].style.display = "flex";
                }
                else {
                    allTasks[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!allTasks[i].classList.contains("completed")) {
                    allTasks[i].style.display = "flex";
                }
                else {
                    allTasks[i].style.display = "none";
                }
                break;
        }
    }

}