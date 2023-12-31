import { toDoList } from "./create-ToDo-list";

export const projects = (() => {
    const projectList = [];

    const addItem = (item) => {
        projectList.push(item)
    }

    const deleteItem = (item) => {
        let index = projectList.indexOf(item);
        projectList.splice(index, 1)
    }

    return {projectList, addItem, deleteItem}
})();

export const lists = (() => {
    const lists = [];
    const addItem = (item) => {
        lists.push(item)
    }

    return {lists, addItem}
})();

export const createMainLists = () => {
    const home = new toDoList('home');
    const today = new toDoList('today') ;
    const week = new toDoList('week');
    lists.addItem(home);
    lists.addItem(week);
    lists.addItem(today);
}