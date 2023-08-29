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


