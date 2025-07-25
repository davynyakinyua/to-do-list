import { form } from "./dom";


// forms for collecting task input
export function taskInput (){
    form();
}



// create tasks using a class
export class Task {
    constructor(name, description, date, time){
        this.name = name;
        this.description = description;
        this.date = date;
        this.time = time;
    }
    response(){
        return `Hello ${this.name}, it is ${this.time}`;
    }
};
