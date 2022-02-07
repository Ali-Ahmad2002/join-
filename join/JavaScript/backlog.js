setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');

allTasks = [];


allTasksToBoard = [];


/**
 * function donwload all tasks from server 
 * and filter the position
 */

async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    allTasksToBoard = allTasks.filter(t => t.poll === 'backlog');
    // backend.deleteItem('allTasks');
    // backend.deleteItem('allTasksToBoard');


    console.log('alltaks', allTasks)
    console.log('alltaksboard', allTasksToBoard)

    renderTasks();
}

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

console.log(random_hex_color_code())

/**
 * function to render all tasks at the respective positions
 * and filter the border colors
 */
function renderTasks() {
    for (let i = 0; i < allTasksToBoard.length; i++) {
        theTask = allTasksToBoard[i];
        console.log('the taks', allTasksToBoard)
        let taskCreator = theTask['user'].img;
        let taskCreatorName = theTask['user'].name;
        let taskCreatorEmail = theTask['user'].email;
        let taskCategory = theTask['taskCategory'];
        let taskDescription = theTask['taskDescription'];

        let content = document.getElementById('content');
        content.innerHTML += showTheTask(i, taskCreator, taskCreatorName, taskCreatorEmail, taskCategory, taskDescription);
    }
}

function showTheTask(i, taskCreator, taskCreatorName, taskCreatorEmail, taskCategory, taskDescription) {
    return `  
    <div id="taskContainer" class="mainSectionHeadlines mainSectionHeadlinesJS" style="border-left: 10px solid ${random_hex_color_code()};">
        <div onclick="openDetails(${i})" class="mainHead1">
            <img class="mainHead1Img" src="${taskCreator}">
            <div class="nameMailContainer">
                <span>${taskCreatorName}</span>
                <span>${taskCreatorEmail}</span>
            </div>
        </div> 
         <span onclick="openDetails(${i})" class="mainHead2 centerJS">${taskCategory}</span>
         <span onclick="openDetails(${i})" class="mainHead3 descriptionClass">${taskDescription}</span>
         <div class="btnStyle">
            <button class="addBtn" onclick="goToBoard(${i})">Go</button>
            <button class="addBtn" onclick="deletTask(${i})">Delet</button>
        </div>
    </div>
    `
}


/**
 * function to open a detail window at the 
 * clicked task  
 */
function openDetails(index) {

    let theTask = allTasksToBoard[index];

    let detailContainer = document.getElementById('detailMain');
    detailContainer.classList.remove('d-none');
    detailContainer.classList.add('detailContainer');


    let taskCreatorName = theTask['user'].name;
    let taskCreatorEmail = theTask['user'].email;
    let taskCategory = theTask['taskCategory'];
    let taskDescription = theTask['taskDescription'];
    let taskDate = theTask['taskDate'];
    let taskUrgency = theTask['taskUrgency'];

    let content = document.getElementById('detail');
    content.innerHTML = '';

    content.innerHTML += showDetails(taskCreatorName, taskCreatorEmail, taskCategory, taskDescription, taskDate, taskUrgency);
}

function showDetails(taskCreatorName, taskCreatorEmail, taskCategory, taskDescription, taskDate, taskUrgency) {
    return `
    <div class="mainDetailContent">
        <div class="detailContentStats"> name:<h2 class="padding">${taskCreatorName}</h2> </div>
        <div class="detailContentStats">E-mail: <p class="padding">${taskCreatorEmail}</p></div> 
        <div class="detailContentStats">Category: <p class="padding">${taskCategory}</p></div> 
        <div class="detailContentStats">Date: <p class="padding">${taskDate}</p></div> 
        <div class="detailContentStats">Description: <p class="padding">${taskDescription}</p></div> 
        <div class="detailContentStats">Urgency: <p class="padding">${taskUrgency}</p></div> 
        <img onclick="closeDetails()" class="closeBtnDetail" src="./images/close-window-32.png">
    </div>
`
}


/**
 * function to close the detail window 
 * of the clicked task
 */
function closeDetails() {
    let detailContainer = document.getElementById('detailMain');
    detailContainer.classList.add('d-none');
    detailContainer.classList.remove('detailContainer');
}


/**
 * function to send the task from backlog
 * to the board and remove it from backlog
 */
async function goToBoard(i) {

    allTasksToBoard[i].poll = 'board';

    await saveInBackEnd();

    console.log('goo board positon', allTasksToBoard)
    console.log('', allTasksToBoard)
    alert('SUCCESS to Board');

    refreshPage();

}


/**
 * function to delet the task at the respective position
 * and from the backend server
 */
async function deletTask(position) {
    allTasks.splice(position, 1);

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);

    refreshPage();
}


/**
 * function to refresh the page
 */
function refreshPage() {
    window.location.reload();
}


/**
 * function to save the tasks in the backend
 */
async function saveInBackEnd() {


    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);

    console.log(allTasksToBoard);
}