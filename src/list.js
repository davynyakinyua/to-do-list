import {dashboardList} from './dom';
import { addLeftPanel } from './dom';




// an array to store lists
const list = [];

// function to get the name of the new list
export function createList (){
    const list = prompt("enter list name");
    
    dashboardList(list);
    // call function for adding list name on left panel
    addLeftPanel(list);
}