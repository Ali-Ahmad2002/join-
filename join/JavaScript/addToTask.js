setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');

let allTasks = [];

//let selectAssignes = [];

async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    //deleteUser(allTasks);

    // selectAssignes = JSON.parse(backend.getItem('selectAssignes')) || [];

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
    //let taskCreator = document.getElementById('taskCreator');
    // let taskCreator = document.getElementById('taskCreator');

    let task = {
        'taskTitle': taskTitle,
        'taskDate': taskDate,
        'taskCategory': taskCategory,
        'taskUrgency': taskUrgency,
        'taskDescription': taskDescription,
        'createdDate': new Date().getTime(),

    };

    allTasks.push(task);
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
    allTasks = [];

}

let users = [{
        'name': 'sani',
        'email': 'sani@gmail.com',
        'img': './images/user.png',
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
        <div  onclick="addImg${i}" class="userCart">
        <img  src="${person.img}" alt=""> <p> ${person.name} </p> 
        <p> ${person.email} </p>
        </div>
        
        
        
        `;
        // <button type="button" onclick="removeUsersCard()">Back</button> html hinzufügen
    }

}

function removeUsersCard() {
    document.getElementById('add').classList.add('d-none');
}

function addImg(i) {
    console.log(i);


}






















// function selectImg() {
//     // let imgContent = document.getElementById('theImages');
//     document.getElementById('addBtn').classList.add('d-none');
//     document.getElementById('img1').classList.remove('d-none');
//     console.log('hallo')
//         // let selectAssignesAsString = JSON.stringify(selectAssignes);
//         // await backend.setItem('selectAssignes', selectAssignesAsString);
// }

// let user1 = [{
//     'name': 'ali',
//     'email': 'ali@gmail.com',
//     'img': './images/panda-g17dbddcd4_640.jpg'
// }];

// let user2 = [{
//     'name': 'sani',
//     'email': 'sani@gmail.com',
//     'img': './images/african-lion-ga78658d36_640.jpg'
// }]

// function addImg(i) {
//     if (i == 0) {
//         i = user1;
//         document.getElementById('img2').classList.add('d-none');
//         selectAssignes.push(i);
//     } else if (i == 1) {
//         i = user2;
//         document.getElementById('img1').classList.add('d-none');
//         selectAssignes.push(i);
//     }
//     // console.log(selectAssignes);
//     // console.log('user tasks', allTasks);
// }