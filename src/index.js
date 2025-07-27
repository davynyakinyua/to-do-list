console.log("hello world");
import {createList} from './list';
import { taskInput} from './task';
import { dashboardList, addLeftPanel } from './dom';
import { defaultList } from './dom';


import './style.css'


// default list
dashboardList("default");
addLeftPanel("default");
defaultList();







const listBtn = document.getElementById("list-btn");

const taskBtn = document.getElementById("task-btn");

//const favorite = document.getElementById("favorite");

const formBtn = document.getElementById("form-id");




//favorite.addEventListener("click", );

listBtn.addEventListener("click", createList);

taskBtn.addEventListener("click", taskInput);

