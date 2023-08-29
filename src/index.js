import { toDoItem, projectToDoItem } from "./Modules/create-ToDo-item";
import { toDoList,  } from "./Modules/create-ToDo-list";
import { projects, lists, week} from "./Modules/miscObjs";
import { getLists } from "./Modules/getLists";

const project1 = new toDoList('school')
const project2 = new toDoList('gym')

projects.addItem(project1)
projects.addItem(project2)

const toDo1 = new toDoItem('take trash out', 7 , 'medium', project1, true);

// console.log(toDo1.getLists());
toDo1.addTo()

console.log(lists.lists[0]);
console.log(lists.lists[1]);
console.log(projects.projectList[0]);