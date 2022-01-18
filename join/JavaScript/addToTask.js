setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');

let allTasks = [];
let selectedUser = null;


//let selectAssignes = [];

async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

}



async function addTask() {
    let taskTitle = document.getElementById('titleInputfield').value;
    let taskDate = document.getElementById('dateInputfield').value;
    let taskCategory = document.getElementById('selectCategory').value;
    let taskUrgency = document.getElementById('taskUrgency').value;
    let taskDescription = document.getElementById('taskDescription').value;


    let task = {
        'taskTitle': taskTitle,
        'taskDate': taskDate,
        'taskCategory': taskCategory,
        'taskUrgency': taskUrgency,
        'taskDescription': taskDescription,
        'createdDate': new Date().getTime(),
        'user': selectedUser,
        'poll': 'backlog'

    };

    allTasks.push(task);
    selectedUser = null;
    console.log(allTasks);
    deletAllVallus();


    alert('SUCCESS');
    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
    refreshPage();
}



function deletAllVallus() {
    document.getElementById('titleInputfield').value = '';
    document.getElementById('dateInputfield').value = '';
    document.getElementById('selectCategory').value = '';
    document.getElementById('taskUrgency').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('selectPersonImg').innerHTML = '';

    //allTasks = [];

}

let users = [{
    'name': 'Sani',
    'email': 'sani@gmail.com',
    'img': './images/african-lion-ga78658d36_640.jpg',
},

{
    'name': 'Ali',
    'email': 'ali@gmail.com',
    'img': './images/panda-g17dbddcd4_640.jpg',
},

{
    'name': 'Peter',
    'email': 'peter@gmail.com',
    'img': './images/bear-g0db275b07_640.jpg',
}
];

console.log('user', users);


function addUsers() {
    document.getElementById('add').classList.remove('d-none');
    let creatUsers = document.getElementById('add');

    for (let i = 0; i < users.length; i++) {
        let person = users[i]
        console.log('person', person.name)

        creatUsers.innerHTML += ` 
        <div  onclick="addImg(${i})" class="userCart">
        <img  src="${person.img}" alt=""> <p class="nameStyle"> ${person.name} </p> 
        <p class="emailStyle"> ${person.email} </p>
        </div>        
        `;


    }


}

function refreshPage() {
    window.location.reload();
}

function removeUsersCard() {
    document.getElementById('add').classList.add('d-none');
}


function selectimg() {
    let imgSelect = document.getElementById('selectPersonImg');
    imgSelect.innerHTML = `
    <div class="userImgContainer">
    <img class="userImg" src="${selectedUser.img}" alt=""> 
    </div>
    `
    console.log(selectedUser)
}

function addImg(i) {
    selectedUser = users[i];
    selectimg();
    removeUsersCard();


}