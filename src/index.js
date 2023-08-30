import "./main.css";
import { toDoItem, projectToDoItem } from "./Modules/create-ToDo-item";
import { toDoList } from "./Modules/create-ToDo-list";
import { projects, lists} from "./Modules/miscObjs";

const project1 = new toDoList('school')
const project2 = new toDoList('gym')

projects.addItem(project1)
projects.addItem(project2)

const toDo1 = new toDoItem('take trash out', 7 , 1, project1, true);
const toDo2 = new toDoItem('email prof', 7 , 3, project1, true);
const toDo3 = new toDoItem('pay dues', 7 , 2, project1, true);

toDo1.addTo()
toDo2.addTo()
toDo3.addTo()

console.log(project1.toDos);
console.log(lists.lists[1]);
console.log(projects.projectList[0]);
