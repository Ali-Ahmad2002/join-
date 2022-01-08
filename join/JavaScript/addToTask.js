setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');


let allTasks = [];
let selectAssignes = [];

async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    selectAssignes = JSON.parse(backend.getItem('selectAssignes')) || [];
    // deleteUser(allTasks);
    // deleteUser(selectAssignes);
}

// function deleteUser(allTasks) {
//     backend.deleteItem('allTasks');
// }

// function deleteUser(selectAssignes) {
//     backend.deleteItem('selectAssignes');
// }

async function addTask() {
    let taskTitle = document.getElementById('titleInputfield').value;
    let taskDate = document.getElementById('dateInputfield').value;
    let taskCategory = document.getElementById('selectCategory').value;
    let taskUrgency = document.getElementById('taskUrgency').value;
    let taskDescription = document.getElementById('taskDescription').value;
    // let taskCreator = document.getElementById('taskCreator');

    let task = {
        'taskTitle': taskTitle,
        'taskCategory': taskCategory,
        'taskDate': taskDate,
        'taskUrgency': taskUrgency,
        'taskDescription': taskDescription,
        'createdAt': new Date().getTime(),
        // 'taskCreator': taskCreator,
        // 'users': selectAssignes
    };

    allTasks.push(task);

    console.log(allTasks);

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);

    // let selectAssignesAsString = JSON.stringify(selectAssignes);
    // await backend.setItem('selectAssignes', selectAssignesAsString);
}

let user1 = [
    {
        'name': 'ali',
        'email': 'ali@gmail.com',
        'img': './images/panda-g17dbddcd4_640.jpg'
    }
];

let user2 = [
    {
        'name': 'sani',
        'email': 'sani@gmail.com',
        'img': './images/african-lion-ga78658d36_640.jpg'
    }
]

function addImg(i) {
    if (i == 0) {
        i = user1;
        document.getElementById('img2').classList.add('d-none');
        selectAssignes.push(i);
    } else if (i == 1) {
        i = user2;
        document.getElementById('img1').classList.add('d-none');
        selectAssignes.push(i);
    }
    // console.log(selectAssignes);
    // console.log('user tasks', allTasks);
}

