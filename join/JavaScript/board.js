setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');

todos = [];


async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    console.log(allTasks);
    //includeHTML();
    renderTasks();



}

function renderTasks() {

    for (let i = 0; i < allTasks.length; i++) {
        let theTask = allTasks[i];

        let taskTitle = theTask['taskTitle'];
        let taskCategory = theTask['taskCategory'];
        console.log('category:', taskCategory);
        let taskDescription = theTask['taskDescription'];
        console.log('description:', taskDescription);

        document.getElementById('toDo').innerHTML += `
        
        <div class="card" id="card">
        <div class="title"><b>Title: ${taskTitle}</b></div>
        <div class="cate">Category: ${taskCategory}</div>
        <div class="desc">Description: <i>${taskDescription}</i></div>
        </div>
        `;



    }

    console.log('todos324', todos);
    todos.push(allTasks);
}



let currentDraggedElement;

function updateHTML() {

    let toDo = todos.filter(t => t['category'] == 'toDo');





    document.getElementById('toDo').innerHTML = '';

    for (let i = 0; i < toDo.length; i++) {
        const element = toDo[i];
        document.getElementById('toDo').innerHTML += genetateTodoHTML(element);
        console.log(toDo);
    }

    let inProgress = todos.filter(t => t['category'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = '';

    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        document.getElementById('inProgress').innerHTML += genetateTodoHTML(element);

    }

    let testing = todos.filter(t => t['category'] == 'testing');

    document.getElementById('testing').innerHTML = '';

    for (let i = 0; i < testing.length; i++) {
        const element = testing[i];
        document.getElementById('testing').innerHTML += genetateTodoHTML(element);

    }

    let done = todos.filter(t => t['category'] == 'done');
    console.log('done', done);

    document.getElementById('done').innerHTML = '';

    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('done').innerHTML += genetateTodoHTML(element);

    }

}



function startDragging(id) {
    currentDraggedElement = id;
    console.log('curent', currentDraggedElement)
}

function genetateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['card']})" class ="card">${element['title']}</div>`;
}


function allowDrop(ev) {
    ev.preventDefault();
}


function moveTo(category) {
    console.log('curent', currentDraggedElement)
    todos['category'] = category;
    updateHTML();
}


function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');

}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');

}