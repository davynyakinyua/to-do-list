import { addTask } from "./list";
import { Task } from "./task";
import { list } from "./list";
import { listArchive } from "./list";



// change list name on the panel
export function dashboardList (name) {
    const listName = document.getElementById("list-name");
    listName.innerHTML = "";

    listName.textContent = name;
    listName.className = "list-title";

}

// function to add state of the default class
export function defaultList(){
    const display = document.getElementById("display");
    // clear the display
    display.innerHTML = "";
    
    display.textContent = "No Task Yet, Add Task";
    display.className = "display-default";
}


// display task on viewport
function taskDisplay (){
    const display = document.getElementById("display");
    display.className = "task-background";
    // clear the display
    display.innerHTML = "";

    // loop throught each item
    for(const list in listArchive){
        listArchive[list].forEach(item => {
            // create a dynamic container for the task
            let container = document.createElement("div");
            container.className = "task-container";

            // create a div for task name
            let title = document.createElement("div");
            title.className = "task-title";
            title.textContent = item.name;

            //  create a div for description
            let des = document.createElement("div");
            des.className = "task-description";
            des.textContent = item.description;

            // create a div container for date and time
            let dateContainer = document.createElement("div");
            dateContainer.className = "task-date-container";

            // create divs for both date and time
            let dateDiv = document.createElement("div");
            dateDiv.className = "task-date";
            dateDiv.textContent = item.date;
            
            let timeDiv = document.createElement("div");
            timeDiv.className = "task-time";
            timeDiv.textContent = item.time;
        
            // create a container for the button
            let btnContainer = document.createElement("div");
            btnContainer.className = "del-btn-container";
            // create a button for delete task
            let btn = document.createElement("button");
            btn.id = "delete-btn";
            btn.textContent = "Delete";

      
        
            // append date div to container
            dateContainer.appendChild(dateDiv);
            dateContainer.appendChild(timeDiv);
            btnContainer.appendChild(btn);
            // append items to container
            container.appendChild(title);
            container.appendChild(des);
            container.appendChild(dateContainer);
            container.appendChild(btnContainer);

            display.appendChild(container);

        });
    }
}

// function to add list on the left panel
export function addLeftPanel (name){
    // select the left panel on the DOM
    const leftPanel = document.getElementById("left-panel");
    // create a list item
    const addList = document.createElement("div");
    // add the name of the class on left panel
    addList.textContent = name;
    // add class for styling
    addList.className = "left-panel-items";

    // append addlist to left panel
    leftPanel.appendChild(addList);
}

// function to create a form input for task
export function form (){
    const display = document.getElementById("display");
    // clear the display
    display.innerHTML = "";

    const form = document.createElement("form");
    form.className = "form";
    form.id = "form-id";
    // legend
    const legend = document.createElement("legend");
    legend.className = "legend";
    // create label and input new task name
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "New Task";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "new-task"
    nameInput.className ="name-input";
    nameInput.required = true;
    // label and input for task description
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.rows = 2;
    descriptionInput.className = "description";
    // label and input for date
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Date: ";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.required = true;
    dateInput.className = "date-input";
    // label for time
    const timeLabel = document.createElement("label");
    timeLabel.textContent = "Time: ";
    const timeInput = document.createElement("input");
    timeInput.type = "time";
    timeInput.id = "time";
    timeInput.className = "time-input";
    timeInput.required = true;

    // submit button
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add Task";
    submitBtn.className = "submit-btn";

    // append to legend
    legend.appendChild(nameLabel);
    legend.appendChild(nameInput);
    legend.appendChild(descriptionLabel);
    legend.appendChild(descriptionInput);
    legend.appendChild(dateLabel);
    legend.appendChild(dateInput);
    legend.appendChild(timeLabel);
    legend.appendChild(timeInput);
    legend.appendChild(submitBtn);

    form.appendChild(legend);

    display.appendChild(form);

    submitBtn.addEventListener("click", function(event){
         // prevent submit button default behavior
        event.preventDefault();

        // collect user input
        const taskName = nameInput.value;
        const description = descriptionInput.value;
        const date = dateInput.value;
        const time = timeInput.value;

        // store data collected
        console.log(`name: ${taskName} description:${description} date: ${date} time: ${time}`);

        // create object to store the task
        let task = new Task(taskName, description, date, time);
        // call function to add task to specific list in the list archive
        addTask(list, task);

        console.log(listArchive);

        // call task display to print task on the viewport
        taskDisplay();
        
        // clear form by displaying the list and the task added
    });

}

