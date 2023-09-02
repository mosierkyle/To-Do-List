import { sortList } from "./getLists";
import { projects, lists } from "./miscObjs";
import { toDoItem } from "./create-ToDo-item";

let currentList;

export const generateToDoItem = (obj) => {
    const id = obj.name.replace(/\s/g, '')
    const toDos = document.querySelector('#to-dos');
    let toDoDiv = document.createElement('div');
    let toDoCheckDiv = document.createElement('div');
    let toDoCheck = document.createElement('button');
    let toDoTitleDiv = document.createElement('div')
    let toDoTitle = document.createElement('p');
    let toDoDateDiv = document.createElement('div');
    let toDoDate = document.createElement('p');
    let toDoDetails = document.createElement('button');
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
    toDoTitleDiv.setAttribute('class', 'to-do-item-title-div')
    toDoDateDiv.setAttribute('class', 'to-do-item-date-div');
    toDoDate.setAttribute('class', 'to-do-item-date');
    toDoDetails.setAttribute('class', 'to-do-item-details');
    toDoDelete.setAttribute('class', 'to-do-item-delete');
    details.setAttribute('class', 'details')
    detailsTitle.setAttribute('class','details-title')
    detailsDueDate.setAttribute('class','details-due-date')
    detailsPriority.setAttribute('class','details-priority')
    closeButton.setAttribute('class', 'close-button')

    toDoTitle.textContent = obj.name;
    toDoDate.textContent = obj.dueDate;
    toDoDetails.textContent = 'Details'
    toDoDelete.textContent = 'Delete'
    detailsTitle.textContent = `Name: ${obj.name}`;
    detailsDueDate.textContent = `Due Date: ${obj.dueDate}`;
    detailsPriority.textContent = `Priority: ${obj.priority}`;
    closeButton.textContent = `X`

    toDos.appendChild(toDoDiv);
    toDoDiv.appendChild(toDoCheckDiv);
    toDoCheckDiv.appendChild(toDoCheck);
    toDoDiv.appendChild(toDoTitleDiv);
    toDoTitleDiv.appendChild(toDoTitle);
    toDoDiv.appendChild(toDoDateDiv);
    toDoDateDiv.appendChild(toDoDate);
    toDoDiv.appendChild(toDoDetails);
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

    toDoDelete.addEventListener('click', ()=> {
        deleteToDoItem(id, obj)
    })

    toDoTitle.addEventListener('click',()=> {
        editToDoTitle(toDoTitleDiv, toDoTitle, obj)
    })

    toDoDate.addEventListener('click',()=> {
        editToDoDate(toDoDateDiv, toDoDate, obj)
    })
}

export const generateToDoList = (list)=> {
    removeToDoList()
    addHeading(list)
    for(let i = 0; i < list.length; i++) {
        generateToDoItem(list[i])
    }
    addNewButton()
    currentList = list;
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
    newButton.textContent = 'Add Task'
    newButton.setAttribute('class', 'new-button')
    newButtonDiv.setAttribute('class', 'new-button-div')
    toDos.appendChild(newButtonDiv)
    newButtonDiv.appendChild(newButton)
    newButton.addEventListener('click', ()=> {
        newToDoItem()
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

export const newToDoItem = () => {
    const toDos = document.querySelector('#to-dos');
    toDos.removeChild(toDos.lastChild)
    let toDoDiv = document.createElement('div');
    let toDoCheckDiv = document.createElement('div');
    let toDoCheck = document.createElement('button');
    const titleInput = document.createElement('input')
    const dateInput = document.createElement('input')
    const priorityInput = document.createElement('select')
    const priority = document.createElement('option')
    const priorityHigh = document.createElement('option')
    const priorityMedium = document.createElement('option')
    const priorityLow = document.createElement('option')
    const doneBtn = document.createElement('button')

    toDoDiv.setAttribute('class', 'new-to-do-item');
    toDoCheckDiv.setAttribute('class', 'to-do-item-box-div');
    toDoCheck.setAttribute('class', 'to-do-item-box');
    titleInput.setAttribute('class', 'title-input')
    titleInput.setAttribute('type', 'text')
    dateInput.setAttribute('class', 'date-input')
    dateInput.setAttribute('type', 'date')
    priorityInput.setAttribute('class', 'priority-input')
    doneBtn.setAttribute('class', 'done-button')

    priority.textContent = 'Priority'
    priorityHigh.textContent = 'High'
    priorityMedium.textContent = 'Medium'
    priorityLow.textContent = 'Low'
    doneBtn.textContent = 'Done'

    toDos.appendChild(toDoDiv);
    toDoDiv.appendChild(toDoCheckDiv);
    toDoCheckDiv.appendChild(toDoCheck);
    addNewButton()
    toDoDiv.appendChild(titleInput)
    toDoDiv.appendChild(dateInput)
    toDoDiv.appendChild(priorityInput)
    priorityInput.appendChild(priority)
    priorityInput.appendChild(priorityLow)
    priorityInput.appendChild(priorityMedium)
    priorityInput.appendChild(priorityHigh)
    toDoDiv.appendChild(doneBtn)

    doneBtn.addEventListener('click', ()=> {
        newItem(titleInput.value, dateInput.value, priorityInput.value)
    })

}

const editToDoTitle = (div, title, obj)=> {
    div.removeChild(title)
    const titleInput = document.createElement('input')
    titleInput.setAttribute('class', 'title-input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('placeholder', title.textContent)
    div.appendChild(titleInput);
    let newTitle;
    titleInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if(titleInput.value == '') {
                console.log(titleInput);
                div.appendChild(title)
            }
            const newTitle = document.createElement('p');
            newTitle.setAttribute('class', 'to-do-item-title');
            newTitle.textContent = titleInput.value
            obj.changeName(titleInput.value)
            div.removeChild(titleInput)
            div.appendChild(newTitle)
            newTitle.addEventListener('click', ()=> {
                editToDoTitle(div, newTitle, obj)
            })
            updateCurrentpage()
        }
    })
}

const editToDoDate = (div, dueDate, obj) => {
    div.removeChild(dueDate)
    const dateInput = document.createElement('input')
    dateInput.setAttribute('class', 'date-input')
    dateInput.setAttribute('type', 'date')
    div.appendChild(dateInput);
    let newDate;
    dateInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const newDate = document.createElement('p');
            newDate.setAttribute('class', 'to-do-item-date');
            newDate.textContent = dateInput.value
            obj.changeDueDate(dateInput.value)
            div.removeChild(dateInput)
            div.appendChild(newDate)
            newDate.addEventListener('click', ()=> {
                editToDoDate(div, newDate, obj)
            })
            updateCurrentpage()
        }
    })
}

const updateCurrentpage = (list = currentList) => {
    sortList(list)
    generateToDoList(list)
}

const newItem = (title,date,priority,project = 'none', hasProject = false)=> {
    let priorityNum = 0;
    if(priority == 'High') {
        priorityNum = 3;
    } else if(priority == 'Medium') {
        priorityNum = 2;
    } else if(priority == 'Low') {
        priorityNum = 1;
    }
    const toDoNew = new toDoItem(title,date,priorityNum,project,hasProject)
    toDoNew.addTo()
    updateCurrentpage()
}