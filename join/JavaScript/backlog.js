setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');

allTasks = [];


allTasksToBoard = [];




async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    allTasksToBoard = allTasks.filter(t => t.poll === 'backlog');


    console.log('alltaks', allTasks)
    console.log('alltaksboard', allTasksToBoard)
    renderTasks();
}

async function renderTasks() {

    for (let i = 0; i < allTasksToBoard.length; i++) {
        theTask = allTasksToBoard[i];
        //let theTask = allTasks[i];
        let taskCreator = theTask['user'].img;
        let taskCreatorName = theTask['user'].name;
        let taskCreatorEmail = theTask['user'].email;
        let taskCategory = theTask['taskCategory'];
        let taskDescription = theTask['taskDescription'];

        let color = 'black';

        if (taskCreatorName == 'Peter') {
            color = '#951515';
        } else if (taskCreatorName == 'Ali') {
            color = '#227210';
        } else if (taskCreatorName == 'Sani') {
            color = '#2d58d9';
        }

        let content = document.getElementById('content');
        content.innerHTML += `
        
        <div id="taskContainer" onclick="openDetails(${i})" class="mainSectionHeadlines mainSectionHeadlinesJS" style="border-left: 10px solid ${color};">
            <div class="mainHead1">
                <img class="mainHead1Img" src="${taskCreator}">
                <div class="nameMailContainer">
                    <span>${taskCreatorName}</span>
                    <span>${taskCreatorEmail}</span>
                </div>
            </div> 
             <span class="mainHead2 centerJS">${taskCategory}</span>
             <span class="mainHead3 descriptionClass">${taskDescription}</span>
             <div class="btnStyle">
                <button class="addBtn" onclick="goToBoard(${i})">Go</button>
                <button class="addBtn" onclick="deletTask(${i})">Delet</button>
            </div>
        </div>
        `;

        // if (taskCreatorName == 'Peter') {
        //     document.getElementById('taskContainer').classList.add('leftBorderPeter');
        // } else if (taskCreatorName == 'Ali') {
        //     document.getElementById('taskContainer').classList.add('leftBorderAli');
        // } else if(taskCreatorName=='Sani') {
        //     document.getElementById('taskContainer').classList.add('leftBorderSani');
        // }

    }

    //deleteUser(allTasksToBoard);

}

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

    content.innerHTML += `
            <div class="mainDetailContent">
                <div class="detailContentStats"> name:<h2 class="padding">${taskCreatorName}</h2> </div>
                <div class="detailContentStats">E-mail: <p class="padding">${taskCreatorEmail}</p></div> 
                <div class="detailContentStats">Category: <p class="padding">${taskCategory}</p></div> 
                <div class="detailContentStats">Date: <p class="padding">${taskDate}</p></div> 
                <div class="detailContentStats">Description: <p class="padding">${taskDescription}</p></div> 
                <div class="detailContentStats">Urgency: <p class="padding">${taskUrgency}</p></div> 
                <img onclick="closeDetails()" class="closeBtnDetail" src="./images/close-window-32.png">
            </div>
        `;

}

function closeDetails() {
    let detailContainer = document.getElementById('detailMain');
    detailContainer.classList.add('d-none');
    detailContainer.classList.remove('detailContainer');
}


async function goToBoard(i) {

    allTasksToBoard[i].poll = 'board';

    await saveInBackEnd();

    console.log('goo board positon', allTasksToBoard)
    console.log('', allTasksToBoard)
    alert('SUCCESS to Board');



    refreshPage();

}

async function deletTask(position) {
    allTasks.splice(position, 1);

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);

    refreshPage();
}

function refreshPage() {
    window.location.reload();
}

function goToBoardaa(i) {
    console.log(i);

    alert('SUCCESS to Board');

}

async function saveInBackEnd() {


    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);

    console.log(allTasksToBoard);
}