function help() {
    let helpTasks = document.getElementById('help');

    helpTasks.innerHTML = "";

    helpTasks.innerHTML = `
    <span><h2>First Steps</h2>
      <p>
        Welcome to the join page of: Sani Saiti, Ali and Pitor. <br>
        This is a project management tool to plan tasks and assign them to people.
      </p>
    </span>  
  `
}




function addhelp() {

    let helpTasks = document.getElementById('help');

    let toglge = document.getElementById('helpButton');
    toglge.classList.toggle("buttonJs");

    helpTasks.innerHTML = "";

    helpTasks.innerHTML = `
    <h2>1. Add Task</h2>    
    <img class="imgHelp" src="images/Screenshot addToTasks .png" alt="">
    <p> 
     In the 'Addtask' Area you can add individual Tasks.
     Enter Title, Category, Description, Due Date, Importance and assign the Task to a Person.
     After all Fields have been filled in, the Task is created with the 'Create Task' Button
    </p>
   
  
  `
}


function backloghelp() {
    let helpTasks = document.getElementById('help');

    helpTasks.innerHTML = "";

    helpTasks.innerHTML = `
    <span><h2>2. Backlog</h2>
    <img class="imgHelp"  src="images/Screenshot backlog.png" alt="">
    <p> 
    The Tasks that have been created are clearly listed in the Backlog.
These Tasks have not yet started.
After clicking on the Task, it will be handed over to the Board.
    </p>
    </span>  
  `
}


function boardhelp() {
    let helpTasks = document.getElementById('help');

    helpTasks.innerHTML = "";

    helpTasks.innerHTML = `
    <span><h2>3. Board</h2>
    <img class="imgHelp" src="images/Screenshot board.png" alt="">
    <p> 
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
}