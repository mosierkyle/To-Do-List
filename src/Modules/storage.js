import { projects } from "./miscObjs";
import { toDoList } from "./create-ToDo-list";
import { toDoItem } from "./create-ToDo-item";
import { updateCurrentpage } from "./dom-manipulation";

export const storeProject = (name) => {
    if(localStorage.projectList === undefined){
        localStorage.projectList = `${name}`;
    } else if(localStorage.projectList !== undefined) {
        let oldValue = localStorage.projectList;
        localStorage.projectList = `${oldValue},${name}`;
    }
}

export const getProjects = () => {
    let storedProjects = localStorage.projectList
    if(localStorage.projectList === undefined) {
        return
    } else if(localStorage.projectList !== undefined) {
        const loadedProjects = storedProjects.split(',')
        for(let i = 0; i < loadedProjects.length; i++) {
            let project = new toDoList(loadedProjects[i])
            projects.addItem(project)
        }
    }
}

export const storeItem = (title, date, priorityNum, project, hasProject) => {
    localStorage[`${title}`] = `${title},${date},${priorityNum},${project.getName()},${hasProject}`
}

export const getItems = () => {
    const local = Object.entries(localStorage)
    for(let i = 0; i < local.length; i++) {
        let toDoName = local[i][0]
        if(toDoName !== 'projectList'){
            let toDoInfo = local[i][1].split(',')
            const loadedToDo = new toDoItem(toDoInfo[0].trim(),toDoInfo[1],toDoInfo[2],retrieveProject(toDoInfo[3]),toDoInfo[4]);
            loadedToDo.addTo()
            updateCurrentpage()
        }
    }
}

const retrieveProject = (projName) => {
    for(let i = 0; i < projects.projectList.length; i++){
        if(projects.projectList[i].name == projName){
            return projects.projectList[i];
        } 
    }
}

export const removeStore = (key) => {
    localStorage.removeItem(key);
}