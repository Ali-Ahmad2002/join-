setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');

let todos = [];
let board;
let currentDraggedElement;
let todoFilter = [];


async function init() {
    await downloadFromServer();
    todos = JSON.parse(backend.getItem('allTasks')) || [];
    // console.log('poll', todos[0].poll);
    todoFilter = todos.filter(t => t.poll === 'board');
    includeHTML();
    updateHtml();

}

/**
 * function for Drag and Drob the cards from container to container 
 */

function updateHtml() {
    let todo = todoFilter.filter(t => !t['list'] || t['list'] == 'toDo'); //!!

    document.getElementById('toDo').innerHTML = '';

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('toDo').innerHTML += showTheTodo(element, index, todo);
    }

    let inProgress = todoFilter.filter(t => t['list'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = '';

    for (let index = 0; index < inProgress.length; index++) {
        const element = inProgress[index];
        document.getElementById('inProgress').innerHTML += showToProgress(element, index, inProgress);
    }

    let testing = todoFilter.filter(t => t['list'] == 'testing');

    document.getElementById('testing').innerHTML = '';

    for (let index = 0; index < testing.length; index++) {
        const element = testing[index];
        document.getElementById('testing').innerHTML += showTesting(index, element, testing);
    }

    let done = todoFilter.filter(t => t['list'] == 'done');

    document.getElementById('done').innerHTML = '';

    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += showDone(index, element, done);
    }
}


/**
 * function to render the tasks in the todo container
 * @param {*} element 
 * @param {*} index 
 * @param {*} todo 
 * @returns 
 */
function showTheTodo(element, index, todo) {
    return `<div draggable="true" ondragstart="startDragging(${element.createdDate})" class="card">
        
    <span class="title"> ${todo[index].taskTitle}  </span>

    <span class="description"> ${todo[index].taskDescription} </span>

     <img src="./images/trashPic.png" class="delete" onclick="ToTrash(${index}, 'toDo')">

     </div>`
}

/**
 * function to render the tasks in the progress container
 * @param {*} element 
 * @param {*} index 
 * @param {*} inProgress 
 * @returns 
 */
function showToProgress(element, index, inProgress) {
    return `<div draggable="true" ondragstart="startDragging(${element.createdDate})" class="card cardInProgress">
        
    <span class="title"> ${inProgress[index].taskTitle}  </span>
    
    <span class="description"> ${inProgress[index].taskDescription} </span>

    <img src="./images/trashPic.png" class="delete" onclick="ToTrash(${index}, 'inProgress')">

    </div>`
}


/**
 * function to render the tasks in the testing container
 * @param {*} index 
 * @param {*} element 
 * @param {*} testing 
 * @returns 
 */
function showTesting(index, element, testing) {
    return `<div draggable="true" ondragstart="startDragging(${element.createdDate})" class="card borderTesting">
        
    <span class="title"> ${testing[index].taskTitle}  </span>
    
    <span class="description"> ${testing[index].taskDescription} </span>

    <img src="./images/trashPic.png" class="delete" onclick="ToTrash(${index}, 'Testing')">

    </div>`
}


/**
 * function to render the tasks in the done container
 * @param {*} index 
 * @param {*} element 
 * @param {*} done 
 * @returns 
 */
function showDone(index, element, done) {
    return `<div draggable="true" ondragstart="startDragging(${element.createdDate})" class="card borderDone">
                    <span class="title"> ${done[index].taskTitle}  </span>
                    <span class="description"> ${done[index].taskDescription}  </span> 
                <div>
                    <img src="./images/trashPic.png" class="delete" onclick="ToTrash(${index}, 'done')">
                </div>
            </div>`
}

/**
 * function to start Drag
 */

function startDragging(createdDate) {
    currentDraggedElement = createdDate;
}

/**
 * function to allow Drop
 */


function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * function to filter and find the cards, set the cards in arr allTasks.
 */
async function moveto(list) {
    const task = todoFilter.find(t => t.createdDate === currentDraggedElement);
    task.list = list;
    await backend.setItem('allTasks', JSON.stringify(todos));
    updateHtml();

}


/**
 * function to delete a card
 */

async function ToTrash(position, list) {
    let toDolist = todoFilter.filter(t => t['list'] === list);

    let toDelete = toDolist[position];
    let posToDelete = todos.indexOf(toDelete);
    todos.splice(posToDelete, 1);
    let allTasksAsString = JSON.stringify(todos);
    await backend.setItem('allTasks', allTasksAsString);

    updateHtml();
    refreshPage();
}


/**
 * function refresh Page, reload page
 */

function refreshPage() {
    window.location.reload();
}


/**
 * function to show and change the container color if the card will be drag
 */

function highlight(card) {
    document.getElementById(card).classList.add('drag-area-highlight');

}

/**
 * function to hidden the container color if the card will be dropped
 */

function removeHighlight(card) {
    document.getElementById(card).classList.remove('drag-area-highlight');

}