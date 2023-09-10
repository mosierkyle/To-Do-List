import "./main.css";
import { toDoItem } from "./Modules/create-ToDo-item";
import { projects, lists, createMainLists } from "./Modules/miscObjs";
import { generateToDoList, loadingLists, loadingProjects } from "./Modules/dom-manipulation";
import { sortList } from "./Modules/getLists";
import {  getItems } from "./Modules/storage";

createMainLists()

const toDo1 = new toDoItem('take trash out', '2023-07-07', 1, 'none', false);

toDo1.addTo()

sortList(lists.lists[0].toDos)
generateToDoList(lists.lists[0].toDos);

loadingLists()
loadingProjects(projects)
getItems()

console.log(localStorage);