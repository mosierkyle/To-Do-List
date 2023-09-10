import { projects, lists} from "./miscObjs";

const getDateDay = (date) => Number(`${date.charAt(date.length-2)}${date.charAt(date.length-1)}`)

const getDateMonth = (date) => Number(`${date.charAt(5)}${date.charAt(6)}`)

const getDateYear = (date) => Number(`${date.charAt(0)}` + `${date.charAt(1)}` + `${date.charAt(2)}` + `${date.charAt(3)}`)

function isDateInThisWeek(date) {
    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();
  
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));
  
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    return date >= firstDayOfWeek && date <= lastDayOfWeek;
  }

  const isDateToday = (dateToCheck) => {
    const today = new Date();
    const isSameDate =
        dateToCheck.getDate() === today.getDate() &&
        dateToCheck.getMonth() === today.getMonth() &&
        dateToCheck.getFullYear() === today.getFullYear();
    return isSameDate
  }

export const getLists = (dueDate, hasProject, project) => {
    const belongsTo = []
    belongsTo.push(lists.lists[0]);
    let newDate = new Date();
    let newDay = Number(getDateDay(dueDate))
    let newMonth = Number(getDateMonth(dueDate)) - 1
    let newYear = Number(getDateYear(dueDate));
    newDate.setFullYear(newYear, newMonth, newDay)
    if(hasProject == 'true') {
        belongsTo.push(project)
    }
    if(isDateInThisWeek(newDate)) {
        belongsTo.push(lists.lists[1]);
    } 
    if (isDateToday(newDate)) {
        belongsTo.push(lists.lists[2]);
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
        a.priority < b.priority ? 1 : -1
    )   
}

export const deleteFrom = (obj, lists) => {
    lists.forEach(element => {
        element.removeItem(obj);
    });
}