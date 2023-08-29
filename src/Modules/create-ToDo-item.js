import { getLists } from "./getLists";

export class toDoItem {
    constructor(name, dueDate, priority) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.hasProject = false;
    }

    getName() {
        return this.name
    }
    changeName(name){
        this.name = name;
    }

    changeDueDate(dueDate){
        this.dueDate = dueDate;
    }

    changePriority(priority){
        this.priority = priority;
    }

    getLists(){ 
        return getLists(10, this.hasProject)
    }

}

export class projectToDoItem extends toDoItem {
    constructor(name, dueDate, priority, project) {
        super(name, dueDate, priority);
        this.hasProject = true;
        this.project = project;
    }

    getProject() {
        return this.project
    }

    getProjectLists(){ 
        return getLists(10, this.hasProject)
    }

}


