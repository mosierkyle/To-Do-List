import { sortList } from "./getLists";

export class toDoList {
    constructor(name) {
        this.name = name;
        this.toDos = []
    }
    
    getName(){
        return this.name
    }

    addItem(item){
        this.toDos.push(item);
    }

    removeItem(item){
        let index = this.toDos.indexOf(item);
        this.toDos.splice(index, 1)
    }

    changeName(name){
        this.name = name;
    }
    
    sortList(){
        sortList(this.toDos);
    }
}



