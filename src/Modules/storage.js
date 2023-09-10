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
    console.log(localStorage.projectList);
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
    localStorage[`${title}`] = `${title},${date},${priorityNum},${project},${hasProject}`
    console.log(localStorage[`${title}`]);
}

export const getItems = () => {
    const local = Object.entries(localStorage)
    for(let i = 0; i < local.length; i++) {
        let toDoName = local[i][0]
        if(toDoName !== 'projectList'){
            let toDoInfo = local[i][1].split(',')
            const loadedToDo = new toDoItem(toDoInfo[0],toDoInfo[1],toDoInfo[2],toDoInfo[3],toDoInfo[4]);
            console.log(toDoInfo[1]);
            loadedToDo.addTo()
            updateCurrentpage()
        }
    }
}