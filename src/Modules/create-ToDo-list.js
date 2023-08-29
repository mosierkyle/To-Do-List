export class toDoList {
    constructor(name) {
        this.name = name;
        this.toDos = []
    }
    
    addItem(item){
        this.toDos.push(item);
    }

    removeItem(item){
        let index = this.toDos.indexOf(item);
        console.log(index);
        this.toDos.splice(index, 1)
    }
}

export class projectToDoList extends toDoList {
    changeName(name){
        this.name = name;
    }


}

