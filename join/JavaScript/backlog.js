setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');

allTasks = []


async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    console.log(allTasks);
    renderTasks();
}

function renderTasks() {

    for (let i = 0; i < allTasks.length; i++) {
        let theTask = allTasks[i];

        let taskCreator = theTask['taskCreator'];
        let taskCategory = theTask['taskCategory'];
        console.log('category:', taskCategory);
        let taskDescription = theTask['taskDescription'];
        console.log('description:', taskDescription);

        let content = document.getElementById('content');
        content.innerHTML += `
        
        <div class="mainSectionHeadlines mainSectionHeadlinesJS">
        <img class="mainHead1" src="${taskCreator}">
        <span class="mainHead2 centerJS">${taskCategory}</span>
        <span class="mainHead3 centerJS">${taskDescription}</span>
        </div>
        `;
    }


}