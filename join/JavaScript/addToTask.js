setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');

;

let allTasks = [];
let selectedAssignes = [];


async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];


}

let users = [{
        name: "Sani",
        email: "sani.löwe@test.ch",
        img: "./images/african-lion-ga78658d36_640.jpg"
    },
    {
        name: "Ali",
        email: "ali.panda@test.de",
        img: "./images/panda-g17dbddcd4_640.jpg"
    }

];


async function addTask() {
    let taskTitle = document.getElementById('titleInputfield').value;
    let taskDate = document.getElementById('dateInputfield').value;
    let taskCategory = document.getElementById('selectCategory').value;
    let taskUrgency = document.getElementById('taskUrgency').value;
    let taskDescription = document.getElementById('taskDescription').value;
    let taskCreator = document.getElementById('taskCreator');

    let task = {
        'taskTitle': taskTitle,
        'taskCategory': taskCategory,
        'taskDate': taskDate,
        'taskUrgency': taskUrgency,
        'taskDescription': taskDescription,
        'createdAt': new Date().getTime(),
        'taskCreator': taskCreator,
        'assignes': selectedAssignes
    };


    allTasks.push(task);
    console.log(allTasks)

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
}

function addImg(i) {
    console.log('bild ' + i);


    selectedAssignes.push(users[i]);
    console.log('lala', selectedAssignes)
    selectedAssignes.splice(i, 1);
    console.log('bala', selectedAssignes)


}