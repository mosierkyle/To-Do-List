import { projects, lists} from "./miscObjs";

export const getLists = (dueDate, hasProject,project) => {
    const belongsTo = []
    belongsTo.push(lists.lists[0]);
    if(hasProject === true) {
        belongsTo.push(project)
    }
    if(dueDate < 10) {
        belongsTo.push(lists.lists[2]);
        belongsTo.push(lists.lists[1]);
    } else if (dueDate < 20) {
        belongsTo.push(lists.lists[1]);
    }
    return belongsTo;
}

// const addToLists = (obj, lists) => {
//     lists.forEach(element => {
//         element.addItem(obj);
//     });
// }

