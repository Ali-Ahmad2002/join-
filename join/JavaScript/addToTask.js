setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');


let allTasks = [];


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
    let taskCreator = document.getElementById('taskCreator');

    let task = {
        'taskTitle': taskTitle,
        'taskCategory': taskCategory,
        'taskDate': taskDate,
        'taskUrgency': taskUrgency,
        'taskDescription': taskDescription,
        'createdAt': new Date().getTime(),
        'taskCreator': taskCreator
    };

    allTasks.push(task);

    // console.log('Hallo', taskTitle);
    // console.log('Hallo', taskCategory);
    // console.log('Hallo', taskDate);
    // console.log('Hallo', taskUrgency);
    // console.log('Hallo', taskDescription);
    // console.log('Hallo', task);

    // function changeCreatorImage() {
    //     let creator = document.getElementById('taskCreator').value;
    //     let creatorImg = document.getElementById('creatorImg');
    //     if (creator == 'majd') {
    //         creatorImg.src = 'join-/join/images/african-lion-ga78658d36_640.jpg';
    //     }
    //     if (creator == 'toma') {
    //         creatorImg.src = './img/Toma.jpeg';
    //     }
    //     if (creator == 'peter') {
    //         creatorImg.src = './img/Peter.jpg';
    //     }
    // }




    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
}

function selectImg() {
    let imgContent = document.getElementById('theImages');
    document.getElementById('addBtn').classList.add('d-none');
    document.getElementById('img1').classList.remove('d-none');
    console.log('hallo')
}

function addImg(i) {

}