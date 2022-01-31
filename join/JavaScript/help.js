/**
 * function help changes the inner html of the help 
 * when you click on first Steps
 */

function help() {
    let helpTasks = document.getElementById('help');
    helpTasks.innerHTML = "";
    helpTasks.innerHTML = `
    <span><h2>First Steps</h2>
      <p class="firstTextStyle">
        Welcome to the join page of: Sani Saiti, Ali and Pitor. <br>
        This is a project management tool to plan tasks and assign them to people.
      </p>
    </span>  
  `
    changeColorOne();
}

/**
 * function changeColorOne() change the color of the help button 
 */

function changeColorOne() {
    document.getElementById('firstStep').classList.add('buttonJs');
    document.getElementById('addTask').classList.remove('buttonJs');
    document.getElementById('backlog').classList.remove('buttonJs');
    document.getElementById('board').classList.remove('buttonJs');
}


/**
 * function addhelp changes the inner html of the help when 
 * you click on  Add Task
 */

function addhelp() {

    let helpTasks = document.getElementById('help');
    helpTasks.innerHTML = "";
    helpTasks.innerHTML = `
    <h2 class="headlineStyle">1. Add Task</h2>    
    <img class="imgHelp" src="images/Screenshot addToTasks .png" alt="">
    <p class="textStyle"> 
     In the 'Addtask' Area you can add individual Tasks.
     Enter Title, Category, Description, Due Date, Importance and assign the Task to a Person.
     After all Fields have been filled in, the Task is created with the 'Create Task' Button
    </p>
    `
    addTaskColor();
}

/**
 * function changeColorOne() change the color of the Add Taks button
 */


function addTaskColor() {
    document.getElementById('firstStep').classList.remove('buttonJs');
    document.getElementById('addTask').classList.add('buttonJs');
    document.getElementById('backlog').classList.remove('buttonJs');
    document.getElementById('board').classList.remove('buttonJs');
}

/**
 * function addhelp changes the inner html of the help 
 * when you click on Backlog
 */

function backloghelp() {
    let helpTasks = document.getElementById('help');
    helpTasks.innerHTML = "";
    helpTasks.innerHTML = `
    <span><h2 class="headlineStyle">2. Backlog</h2>
        <img class="imgHelp"  src="images/Screenshot backlog.png" alt="">
    <p class="textStyle"> 
        The Tasks that have been created are clearly listed in the Backlog.
        These Tasks have not yet started.
        After clicking on the Task, it will be handed over to the Board.
    </p>
    </span>  
  `
    backlogColor();
}

/**
 * function changeColorOne() change the color of the backlogColor button
 */

function backlogColor() {
    document.getElementById('firstStep').classList.remove('buttonJs');
    document.getElementById('addTask').classList.remove('buttonJs');
    document.getElementById('backlog').classList.add('buttonJs');
    document.getElementById('board').classList.remove('buttonJs');
}


/**
 * function boardhelp changes the inner html of the help 
 * when you click on boardhelp
 */


function boardhelp() {
    let helpTasks = document.getElementById('help');
    helpTasks.innerHTML = "";
    helpTasks.innerHTML = `
    <span><h2 class="headlineStyle">3. Board</h2>
    <img class="imgHelpBoard" src="images/Screenshot board.png" alt="">
    <p class="textStyle"> 
        The Board consists of four Sections.
        With the Mouse button pressed, each Task can be moved to a different Section.
        Further Informations can be displayed by clicking on a Task.

        In the 'todo' Section the Tasks that are to be processed next are listed.
        If the Mouse is hovered over an Task in this Section, a Button appears that sends this Task back to the Backlog.

        The 'in progress' Section lists Tasks that are currently being processed.

        The 'testing' Section lists Tasks that have been completed but are still being tested for completion.

        The 'done' Section lists Tasks that have been successfully tested and thus fully processed.
        In this Section a Button appears when hovering to permanently delete this Task.
    </p>
    </span>  
  `

    boardColor();
}


/**
 * function changeColorOne() change the color of the  boardColor button
 */


function boardColor() {
    document.getElementById('firstStep').classList.remove('buttonJs');
    document.getElementById('addTask').classList.remove('buttonJs');
    document.getElementById('backlog').classList.remove('buttonJs');
    document.getElementById('board').classList.add('buttonJs');
}