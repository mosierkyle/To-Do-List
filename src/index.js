import "./main.css";
import { toDoItem } from "./Modules/create-ToDo-item";
import { toDoList } from "./Modules/create-ToDo-list";
import { projects, lists, createMainLists} from "./Modules/miscObjs";
import { generateToDoList, loadingLists, loadingProjects, newToDoItem,  } from "./Modules/dom-manipulation";
import { sortList } from "./Modules/getLists";

createMainLists()
const project1 = new toDoList('school')
const project2 = new toDoList('gym')

projects.addItem(project1)
projects.addItem(project2)

const toDo1 = new toDoItem('take trash out', '2023-7-7', 1, 'none', false);
const toDo2 = new toDoItem('email prof', '2023-9-02', 3, project1, true);
const toDo3 = new toDoItem('pay dues', '2023-9-06' , 2, project1, true);

toDo1.addTo()
toDo2.addTo()
toDo3.addTo()

sortList(lists.lists[0].toDos)
generateToDoList(lists.lists[0].toDos);

loadingLists()
loadingProjects(projects)

