import { toDoItem, projectToDoItem } from "./Modules/create-ToDo-item";
import { toDoList,  } from "./Modules/create-ToDo-list";
import { projects, lists} from "./Modules/miscObjs";
import { getLists } from "./Modules/getLists";

lists.lists[0].addItem('yo mamma');

const project1 = new toDoList('school')
projects.addItem(project1)

const toDo1 = new projectToDoItem('take trash out', 7 , 'medium', project1);

console.log(toDo1.getProject());
console.log(toDo1.getLists());