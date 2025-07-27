import {dashboardList} from './dom';
import { addLeftPanel } from './dom';


// archive for all lists
 export const listArchive = {};

export let list = "default";

// function to get the name of the new list
export function createList (){
    const display = document.getElementById("display");
    display.className = "task-background";
    // clear the display
    display.innerHTML = "";
    // prompt input from user to create a list
     list = prompt("enter list name");
    // call function for adding list name on the dashboard
    dashboardList(list);
    // call function for adding list name on left panel
    addLeftPanel(list);
    // store list in list archive
    list;    

};

// function to add a task to a specific list
export function addTask (list, taskObj){
    // check if list exist if not initialize it as an empty array
    if(!listArchive[list]){
        listArchive[list] = [];
    }

    // push the task object to the specific list
    listArchive[list].push(taskObj)
}

