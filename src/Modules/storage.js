import { projects } from "./miscObjs";
import { toDoList } from "./create-ToDo-list";

export const storeProject = (name) => {
    if(localStorage.projectList === undefined){
        localStorage.projectList = `${name}`;
    } else if(localStorage.projectList !== undefined) {
        let oldValue = localStorage.projectList;
        localStorage.projectList = `${oldValue},${name}`;
    }
    console.log(localStorage.projectList);
}

export const getProjects = () => {
    let storedProjects = localStorage.projectList
    if(localStorage.projectList === undefined) {
        return
    } else if(localStorage.projectList !== undefined) {
        const loadedProjects = storedProjects.split(',')
        console.log(loadedProjects);
        for(let i = 0; i < loadedProjects.length; i++) {
            let project = new toDoList(loadedProjects[i])
            projects.addItem(project)
        }
    }
}