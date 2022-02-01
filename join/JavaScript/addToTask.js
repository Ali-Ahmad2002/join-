setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');


/**
 * Arry to save the values of add Task
 */

let allTasks = [];
let selectedUser = null;

async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

}

/**
 * this function creates Variables from the Form element in addTask.html
 */
async function addTask() {
    let taskTitle = document.getElementById('titleInputfield').value;
    let taskDate = document.getElementById('dateInputfield').value;
    let taskCategory = document.getElementById('selectCategory').value;
    let taskUrgency = document.getElementById('taskUrgency').value;
    let taskDescription = document.getElementById('taskDescription').value;

    /**
     * this funktions creats a variable to save the elements from the Form in addTask.html
     * new variable task
     */

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


    /**
     * this funktions pushes the new variable task into the array tasks
     * @param {variable} task 
     */


    allTasks.push(task);
    selectedUser = null;
    deletAllVallus();
    successToBoard(taskTitle);

    setTimeout(() => {
        refreshPage()

    }, 4000);







    /**
     * function to change JSON tasks to string and save it to backend
     */
    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
    //refreshPage();
}


/**
 * function to delet all Vallues
 */


function deletAllVallus() {
    document.getElementById('titleInputfield').value = '';
    document.getElementById('dateInputfield').value = '';
    document.getElementById('selectCategory').value = '';
    document.getElementById('taskUrgency').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('selectPersonImg').innerHTML = '';
}


/**
 * User Jsson
 */


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

/**
 * function to Creat a new User
 */



function addUsers() {
    document.getElementById('add').classList.remove('d-none');
    let creatUsers = document.getElementById('add');
    creatUsers.innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        let person = users[i]
        creatUsers.innerHTML += ` 
        <div  onclick="addImg(${i})" class="userCart">
        <img  src="${person.img}" alt=""> <p class="nameStyle"> ${person.name} </p> 
        <p class="emailStyle"> ${person.email} </p>
        </div>        
        `;
    }
}

/**
 * function to refresh Page
 */

function refreshPage() {
    window.location.reload();
}

/**
 * function to Remove User Card
 */

function removeUsersCard() {
    document.getElementById('add').classList.add('d-none');
}


/**
 * function to to the Selectet  User Img
 */

function selectimg() {
    let imgSelect = document.getElementById('selectPersonImg');
    imgSelect.innerHTML = `
    <div class="userImgContainer">
    <img class="userImg" src="${selectedUser.img}" alt=""> 
    </div>
    `
}

/**
 * function to Add  User Img
 *
 */

function addImg(i) {
    selectedUser = users[i];
    selectimg();
    removeUsersCard();
}


/**
 * function to the Succes to Board
 */

function successToBoard(taskTitle) {
    let succes = document.getElementById('taskData');
    // succes.innerHTML = "";
    succes.innerHTML = `
        <div class="alert">
        <p>
        Success!! <br>
        Your Task with the Title  <b>"${taskTitle}"</b> has been saved <br>
        You can now create a new Task, or visit Board to continue working with this Task. </p>
        </div>

        `
}