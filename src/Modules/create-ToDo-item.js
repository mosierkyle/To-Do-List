import { getLists, addTo } from "./getLists";

export class toDoItem {
    constructor(name, dueDate, priority, project, hasProject = false) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.hasProject = hasProject;
        this.project = project;
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
        return getLists(this.dueDate, this.hasProject, this.project)
    }

    addTo(){
        return addTo(this, this.getLists())
    }

}
