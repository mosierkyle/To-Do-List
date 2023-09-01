import { projects, lists} from "./miscObjs";

export const getLists = (dueDate, hasProject, project) => {
    const belongsTo = []
    belongsTo.push(lists.lists[0]);
    if(hasProject === true) {
        
        belongsTo.push(project)
    }
    if(dueDate < 10) {
        belongsTo.push(lists.lists[2]);
    } 
    if (dueDate < 20) {
        belongsTo.push(lists.lists[1]);
    }
    return belongsTo;
}

export const addTo = (obj, lists) => {
    lists.forEach(element => {
        element.addItem(obj);
    });
}

export const sortList = (list) => {
    list.sort((a,b) =>
        a.priority > b.priority ? 1 : -1
    )   
}

export const deleteFrom = (obj, lists) => {
    lists.forEach(element => {
        element.removeItem(obj);
    });
}