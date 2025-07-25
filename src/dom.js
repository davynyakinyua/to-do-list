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
        
        // clear form by displaying the list and the task added
    });

}

