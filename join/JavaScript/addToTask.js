setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');


let allTasks = [];


async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];


}


async function addTask() {
    let taskTitle = document.getElementById('titleInputfield').value;
    let taskCategory = document.getElementById('selectCategory').value;
    let taskDate = document.getElementById('dateInputfield').value;
    let taskUrgency = document.getElementById('selectUrgency').value;
    let taskDescription = document.getElementById('descriptionInputfield').value;
    // let taskCreator = document.getElementById('taskCreator').value;

    let task = {
        'taskTitle': taskTitle,
        'taskCategory': taskCategory,
        'taskDate': taskDate,
        'taskUrgency': taskUrgency,
        'taskDescription': taskDescription,
        'createdAt': new Date().getTime()
            //'creatorImg': taskCreatorImg
    };

    allTasks.push(task);

    // console.log('Hallo', taskTitle);
    // console.log('Hallo', taskCategory);
    // console.log('Hallo', taskDate);
    // console.log('Hallo', taskUrgency);
    // console.log('Hallo', taskDescription);
    // console.log('Hallo', task);


    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
}