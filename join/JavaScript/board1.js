setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');

let todos = [];
let board;
let currentDraggedElement;
let todoFilter = [];


async function init() {
    await downloadFromServer();
    todos = JSON.parse(backend.getItem('allTasks')) || [];
    // console.log('poll', todos[0].poll);
    let filteredTodos = todos.filter(t => t.poll === 'board');
    console.log('filter', filteredTodos);
    todoFilter.push(filteredTodos);
    includeHTML();
    updateHtml();

}

function updateHtml() {
    let todo = todos.filter(t => !t['list'] || t['list'] == 'toDo'); //!!

    document.getElementById('toDo').innerHTML = '';

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('toDo').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdDate})" class="card">
        
       <span class="title"> ${todo[index].taskTitle}  </span>

       <span class="description"> ${todo[index].taskDescription} </span>

        <img src="./images/trashPic.png" class="delete" onclick="ToTrash(${index}, 'toDo')">

        </div>`;
    }


    let inProgress = todos.filter(t => t['list'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = '';

    for (let index = 0; index < inProgress.length; index++) {
        const element = inProgress[index];
        document.getElementById('inProgress').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdDate})" class="card cardInProgress">
        
        <span class="title"> ${inProgress[index].taskTitle}  </span>
        
        <span class="description"> ${inProgress[index].taskDescription} </span>

        <img src="./images/trashPic.png" class="delete" onclick="ToTrash(${index}, 'inProgress')">

        </div>`;
    }


    let testing = todos.filter(t => t['list'] == 'testing');

    document.getElementById('testing').innerHTML = '';

    for (let index = 0; index < testing.length; index++) {
        const element = testing[index];
        document.getElementById('testing').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdDate})" class="card borderTesting">
        
        <span class="title"> ${testing[index].taskTitle}  </span>
        
        <span class="description"> ${testing[index].taskDescription} </span>

        <img src="./images/trashPic.png" class="delete" onclick="ToTrash(${index}, 'Testing')">

        </div>`;
    }


    let done = todos.filter(t => t['list'] == 'done');

    document.getElementById('done').innerHTML = '';

    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdDate})" class="card borderDone">

        <span class="title"> ${done[index].taskTitle}  </span>
      
        <span class="description"> ${done[index].taskDescription}  </span>
        
       
        
        <div>
        <img src="./images/trashPic.png" class="delete" onclick="ToTrash(${index}, 'done')">
        </div>

        </div>`;
    }

}



function startDragging(createdDate) {
    currentDraggedElement = createdDate; //!!
}

function allowDrop(ev) { //!!!
    ev.preventDefault();
}

async function moveto(list) {
    const task = todos.find(t => t.createdDate === currentDraggedElement);
    task.list = list;
    await backend.setItem('allTasks', JSON.stringify(todos));
    updateHtml();

}

async function ToTrash(position, list) {
    let toDolist = todos.filter(t => t['list'] === list);

    let toDelete = toDolist[position];
    let posToDelete = todos.indexOf(toDelete);
    todos.splice(posToDelete, 1);
    let allTasksAsString = JSON.stringify(todos);
    await backend.setItem('allTasks', allTasksAsString);

    updateHtml();

}

function highlight(card) {
    document.getElementById(card).classList.add('drag-area-highlight');

}

function removeHighlight(card) {
    document.getElementById(card).classList.remove('drag-area-highlight');

}