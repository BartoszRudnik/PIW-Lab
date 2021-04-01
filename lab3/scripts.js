'use strict';

const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoListBardzo = document.querySelector('#bardzo');
const toDoListSrednio = document.querySelector('#srednio');
const toDoListMalo = document.querySelector('#malo');
const filterOption = document.querySelector('#filter');
const importanceOption = document.querySelector('#importanceSelect');

let trashClone;
let trashIdList;

toDoButton.addEventListener('click', addToDoItem);
toDoListBardzo.addEventListener('click', deleteCheck);
toDoListMalo.addEventListener('click', deleteCheck);
toDoListSrednio.addEventListener('click', deleteCheck);
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

    const importance = importanceOption.options[importanceOption.selectedIndex].text;

    if (toDoInput.value != "") {
        if (importance === "Bardzo pilne") {
            toDoListBardzo.appendChild(toDoDiv);
        }
        if (importance === "Srednio pilne") {
            toDoListSrednio.appendChild(toDoDiv);
        }
        if (importance === "Malo pilne") {
            toDoListMalo.appendChild(toDoDiv);
        }
        toDoInput.value = "";
    }

}

$(document).ready(function () {
    $("#btnRestore").click(function () {
        $('#' + trashIdList).append(trashClone);
        $("#btnRestore").disabled = true;
    });
});

function deleteCheck(event) {

    const item = event.target;

    if (item.classList[0] === "delete-btn") {

        const task = item.parentElement;

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
                document.getElementById("btnRestore").disabled = false;
                trashIdList = task.parentElement.id;
                trashClone = $(task).clone(true);
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

    const bardzoTasks = document.querySelectorAll('#bardzo div');
    const srednioTasks = document.querySelectorAll('#srednio div');
    const maloTasks = document.querySelectorAll('#malo div');

    filter(bardzoTasks, event);
    filter(srednioTasks, event);
    filter(maloTasks, event);

}

function filter(allTasks, event) {
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

function hideMalo() {
    hide("malo");
}

function hideSrednio() {
    hide("srednio");
}

function hideBardzo() {
    hide("bardzo");
}

function hide(importance) {
    var x = document.querySelectorAll("#" + importance + " div");
    x.forEach((element) => {
        if (element.style.display === "none") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
}

function search() {

    var input, filter, myCheckbox;

    input = document.getElementById('myInput');
    myCheckbox = document.getElementById('myCheck');

    if (myCheckbox.checked) {
        filter = input.value.toUpperCase();
    }else{
        filter = input.value;
    }

    bardzoList = document.querySelectorAll("#bardzo div");
    srednioList = document.querySelectorAll("#srednio div");
    maloList = document.querySelectorAll("#malo div");

    searchList(bardzoList, filter, myCheckbox);
    searchList(srednioList, filter, myCheckbox);
    searchList(maloList, filter, myCheckbox);

}

function searchList(list, filter, checkbox) {

    list.forEach((element) => {

        li = element.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
            a = li[i];
            txtValue = a.innerText || a.textContent;
            if(checkbox.checked){
                txtValue = txtValue.toUpperCase();
            }
            if (txtValue.indexOf(filter) > -1) {
                li[i].parentElement.style.display = "flex";
            } else {
                li[i].parentElement.style.display = "none";
            }
        }
    });

}