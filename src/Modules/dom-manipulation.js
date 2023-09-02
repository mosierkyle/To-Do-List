import { sortList } from "./getLists";
import { projects, lists } from "./miscObjs";

export const generateToDoItem = (obj) => {
    const id = obj.name.replace(/\s/g, '')
    const body = document.querySelector('#body')
    const toDos = document.querySelector('#to-dos');
    let toDoDiv = document.createElement('div');
    let toDoCheckDiv = document.createElement('div');
    let toDoCheck = document.createElement('button');
    let toDoTitle = document.createElement('p');
    let toDoDateDiv = document.createElement('div');
    let toDoDate = document.createElement('p');
    let toDoDetails = document.createElement('button');
    let toDoEdit = document.createElement('button');
    let toDoDelete = document.createElement('button');
    let details = document.createElement('div');
    let detailsTitle = document.createElement('p')
    let detailsDueDate = document.createElement('p')
    let detailsPriority = document.createElement('p')
    let closeButton = document.createElement('p')

    toDoDiv.setAttribute('id', id)
    toDoDiv.setAttribute('class', 'to-do-item');
    toDoCheckDiv.setAttribute('class', 'to-do-item-box-div');
    toDoCheck.setAttribute('class', 'to-do-item-box');
    toDoTitle.setAttribute('class', 'to-do-item-title');
    toDoDateDiv.setAttribute('class', 'to-do-item-date-div');
    toDoDate.setAttribute('class', 'to-do-item-date');
    toDoDetails.setAttribute('class', 'to-do-item-details');
    toDoEdit.setAttribute('class', 'to-do-item-edit');
    toDoDelete.setAttribute('class', 'to-do-item-edit');
    details.setAttribute('class', 'details')
    detailsTitle.setAttribute('class','details-title')
    detailsDueDate.setAttribute('class','details-due-date')
    detailsPriority.setAttribute('class','details-priority')
    closeButton.setAttribute('class', 'close-button')

    toDoTitle.textContent = obj.name;
    toDoDate.textContent = obj.dueDate;
    toDoDetails.textContent = 'Details'
    toDoEdit.textContent = 'Edit'
    toDoDelete.textContent = 'Delete'
    detailsTitle.textContent = `Name: ${obj.name}`;
    detailsDueDate.textContent = `Due Date: ${obj.dueDate}`;
    detailsPriority.textContent = `Priority: ${obj.priority}`;
    closeButton.textContent = `X`

    toDos.appendChild(toDoDiv);
    toDoDiv.appendChild(toDoCheckDiv);
    toDoCheckDiv.appendChild(toDoCheck);
    toDoDiv.appendChild(toDoTitle);
    toDoDiv.appendChild(toDoDateDiv);
    toDoDateDiv.appendChild(toDoDate);
    toDoDiv.appendChild(toDoDetails);
    toDoDiv.appendChild(toDoEdit);
    toDoDiv.appendChild(toDoDelete);
    body.appendChild(details)
    details.appendChild(detailsTitle)
    details.appendChild(detailsDueDate)
    details.appendChild(detailsPriority)
    details.appendChild(closeButton)
    
    toDoDetails.addEventListener('click', ()=> {
        details.style.display = 'grid';
    })
    
    closeButton.addEventListener('click', ()=> {
        details.style.display = 'none';
    })

    toDoEdit.addEventListener('click', ()=> {
        details.style.display = 'grid'

    })

    toDoDelete.addEventListener('click', ()=> {
        deleteToDoItem(id, obj)
    })
}

export const generateToDoList = (list)=> {
    removeToDoList()
    addHeading(list)
    for(let i = 0; i < list.length; i++) {
        generateToDoItem(list[i])
    }
    addNewButton()
}

const removeToDoList = ()=> {
    const toDos = document.querySelector('#to-dos');
    while(toDos.firstChild) {
        toDos.removeChild(toDos.firstChild);
    }

}

export const loadingLists = ()=> {
    const home = document.querySelector('#home');
    const today = document.querySelector('#today');
    const week = document.querySelector('#week');

    home.addEventListener('click', () => {
        sortList(lists.lists[0].toDos)
        generateToDoList(lists.lists[0].toDos)
    })
    today.addEventListener('click', () => {
        sortList(lists.lists[2].toDos)
        generateToDoList(lists.lists[2].toDos)
    })
    week.addEventListener('click', () => {
        sortList(lists.lists[1].toDos)
        generateToDoList(lists.lists[1].toDos)
    })
}

export const loadingProjects = (projects) => {
    const projectList = document.querySelector('#project-list')
    for(let i = 0; i < projects.projectList.length; i++) {
        const newProject = document.createElement('p');
        projectList.appendChild(newProject)
        newProject.textContent = projects.projectList[i].name
        newProject.setAttribute('class', 'project')
        newProject.addEventListener('click', ()=> {
            sortList(projects.projectList[i].toDos)
            generateToDoList(projects.projectList[i].toDos)
        })
    }
}

const deleteToDoItem = (id, obj) => {
    const divToDelete = document.querySelector(`#${id}`)
    divToDelete.remove()
    obj.deleteFrom()
}

const addNewButton = () => {
    const toDos = document.querySelector('#to-dos')
    const newButtonDiv = document.createElement('div')
    const newButton = document.createElement('button')
    newButton.textContent = '+'
    newButton.setAttribute('class', 'new-button')
    newButtonDiv.setAttribute('class', 'new-button-div')
    toDos.appendChild(newButtonDiv)
    newButtonDiv.appendChild(newButton)
    newButton.addEventListener('click', ()=> {
    })
}

const addHeading = (list)=> {
    const toDos = document.querySelector('#to-dos')
    const newHeadingDiv = document.createElement('div')
    const newHeading = document.createElement('h2')
    for(let i = 0; i < lists.lists.length; i++) {
        if(list == lists.lists[i].toDos){
            newHeading.textContent = capitalizeFirstLetter(lists.lists[i].getName())
        }
    }
    for(let i = 0; i < projects.projectList.length; i++) {
        if(list == projects.projectList[i].toDos){
            newHeading.textContent = capitalizeFirstLetter(projects.projectList[i].getName())
        }
    }
    newHeading.setAttribute('class', 'new-heading')
    newHeadingDiv.setAttribute('class', 'new-heading-div' )
    toDos.appendChild(newHeadingDiv);
    newHeadingDiv.appendChild(newHeading)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}