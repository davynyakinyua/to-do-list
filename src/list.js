import {dashboardList} from './dom';
import { addLeftPanel } from './dom';


// archive for all lists
export const listArchive = {
    default:[],
  
};



// function to get the name of the new list
export function createList (){
    // prompt input from user to create a list
    const list = prompt("enter list name");
    // call function for adding list name on the dashboard
    dashboardList(list);
    // call function for adding list name on left panel
    addLeftPanel(list);
    // store list in list archive
    listArchive[list] = [];

};
