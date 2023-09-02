import "./main.css";
import { toDoItem } from "./Modules/create-ToDo-item";
import { toDoList } from "./Modules/create-ToDo-list";
import { projects, lists} from "./Modules/miscObjs";
import { generateToDoList, loadingLists, loadingProjects,  } from "./Modules/dom-manipulation";
import { sortList } from "./Modules/getLists";

const project1 = new toDoList('school')
const project2 = new toDoList('gym')

projects.addItem(project1)
projects.addItem(project2)
console.log(projects);

const toDo1 = new toDoItem('take trash out', 7 , 1, 'none', false);
const toDo2 = new toDoItem('email prof', 11 , 3, project1, true);
const toDo3 = new toDoItem('pay dues', 7 , 2, project1, true);

console.log(lists.lists[1]);
toDo1.addTo()
toDo2.addTo()
toDo3.addTo()

sortList(lists.lists[0].toDos)
generateToDoList(lists.lists[0].toDos);

loadingLists()
loadingProjects(projects)