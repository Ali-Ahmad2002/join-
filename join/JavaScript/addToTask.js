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
        'user': selectedUser

    };

    allTasks.push(task);
    selectedUser = null;
    console.log(allTasks);
    deletAllVallus();



    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
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
        'name': 'sani',
        'email': 'sani@gmail.com',
        'img': './images/african-lion-ga78658d36_640.jpg',
    },

    {
        'name': 'saiti',
        'email': 'saiti@gmail.com',
        'img': './images/user.png',
    },

    {
        'name': 'ali',
        'email': 'ali@gmail.com',
        'img': './images/user.png',
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
        <img  src="${person.img}" alt=""> <p> ${person.name} </p> 
        <p> ${person.email} </p>
        </div>        
        `;


    }


}

function removeUsersCard() {
    document.getElementById('add').classList.add('d-none');
}


function selectimg() {
    let imgSelect = document.getElementById('selectPersonImg');
    imgSelect.innerHTML = `
    <img  src="${selectedUser.img}" alt=""> 
    
  `
    console.log(selectedUser)
}

function addImg(i) {
    selectedUser = users[i];
    selectimg();
    removeUsersCard();


}