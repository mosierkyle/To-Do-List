export const createToDoItem = (obj) => {
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
    let details = document.createElement('div')
   
    toDoDiv.setAttribute('id', obj.name)
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

    toDoTitle.textContent = obj.name;
    toDoDate.textContent = obj.dueDate;
    toDoDetails.textContent = 'Details'
    toDoEdit.textContent = 'Edit'
    toDoDelete.textContent = 'Delete'

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
    
}