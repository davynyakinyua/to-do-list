console.log("hello world");
import {createList} from './list';
import {listArchive} from './list'
import { taskInput } from './task';

import './style.css'



/*

// create tasks using a class
class Task {
    constructor(name, description, time){
        this.name = name;
        this.description = description;
        this.time = time;

        response(){
            return `Hello ${this.name}, it is ${this.time}`;
        }
    }


}
*/






const listBtn = document.getElementById("list-btn");

const taskBtn = document.getElementById("task-btn");

//const favorite = document.getElementById("favorite");

const formBtn = document.getElementById("form-id");




//favorite.addEventListener("click", );

listBtn.addEventListener("click", createList);

taskBtn.addEventListener("click", taskInput);

formBtn.addEventListener("click", );
