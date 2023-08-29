import { toDoItem, projectToDoItem } from "./Modules/create-ToDo-item";
import { toDoList } from "./Modules/create-ToDo-list";
import { projects } from "./Modules/miscObjs";

const home = new toDoList('home');
const today = new toDoList('today') ;
const week = new toDoList('week');


const toDo1 = new projectToDoItem('take trash out', '08/28/23', 'high', 'school');

projects.addItem(toDo1)
projects.deleteItem(toDo1)
console.log(projects.projectList);
