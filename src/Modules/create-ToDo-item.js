export class toDoItem {
    constructor(name, dueDate, priority) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.hasProject = false;
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

}

export class projectToDoItem extends toDoItem {
    constructor(name, dueDate, priority, project) {
        super(name, dueDate, priority);
        this.project = project;
        this.hasProject = true;
    }

    
}


