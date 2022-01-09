setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');

allTasks = []

allTasksToBoard = []


async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    console.log(allTasks);
    renderTasks();
    loadBackEnd();
}

function renderTasks() {

    for (let i = 0; i < allTasks.length; i++) {
        let theTask = allTasks[i];

        let taskCreator = theTask['user'].img;
        let taskCreatorName = theTask['user'].name;
        let taskCreatorEmail = theTask['user'].email;
        let taskCategory = theTask['taskCategory'];
        console.log('category:', taskCategory);
        let taskDescription = theTask['taskDescription'];
        console.log('description:', taskDescription);

        let content = document.getElementById('content');
        content.innerHTML += `
        
        <div id="taskContainer" class="mainSectionHeadlines mainSectionHeadlinesJS">
            <div class="mainHead1">
                <img class="mainHead1Img" src="${taskCreator}">
                <div class="nameMailContainer">
                    <span>${taskCreatorName}</span>
                    <span>${taskCreatorEmail}</span>
                </div>
            </div>
             <span class="mainHead2 centerJS">${taskCategory}</span>
             <span class="mainHead3">${taskDescription}</span>
             <div class="btnStyle">
                <button onclick="goToBoard(${i})">Go</button>
                <button onclick="deletTask(${i})">Delet</button>
            </div>
        </div>
        `;
    }
}

async function deletTask(position) {
    allTasks.splice(position, 1);

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
    refreshPage();
    // init();
}

function refreshPage(){
    window.location.reload();
} 

// function deletTask(i) {
//     console.log(i);
//     backend.deleteItem(allTasks[i]);
//     console.log(allTasks[i]);
// }

function goToBoard(i) {
    console.log(i);
    // allTasksToBoard.push(allTasks[i]['user']);
    // allTasksToBoard.push(allTasks[i]['taskCategory']);
    // allTasksToBoard.push(allTasks[i]['taskDescription']);   

    allTasksToBoard.push(allTasks[i]);

    // console.log(allTasksToBoard);
    saveInBackEnd();
    alert('SUCCESS to Board');
    // deleteUser(allTasksToBoard);
    deletTask();
    refreshPage();
}

async function saveInBackEnd() {

    let allTasksToBoardAsString = JSON.stringify(allTasksToBoard);
    await backend.setItem('allTasksToBoard', allTasksToBoardAsString);

    console.log(allTasksToBoard);
}

async function loadBackEnd() {
    await downloadFromServer();
    allTasksToBoard = JSON.parse(backend.getItem('allTasksToBoard')) || [];
}