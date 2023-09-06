import { projects, lists} from "./miscObjs";

const getDateDay = (date) => parseInt(date.charAt(date.length-1))

const getDateMonth = (date) => parseInt(`${date.charAt(5)}` + `${date.charAt(6)}`)


const getDateYear = (date) => parseInt(`${date.charAt(0)}` + `${date.charAt(1)}` + `${date.charAt(2)}` + `${date.charAt(3)}`)

function isDateInThisWeek(date) {
    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();
  
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));
  
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    return date >= firstDayOfWeek && date <= lastDayOfWeek;
  }

  function isDateToday(dateToCheck) {
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
    let newDay = parseInt(getDateDay(dueDate))
    let newMonth = parseInt(getDateMonth(dueDate)) - 1
    let newYear = parseInt(getDateYear(dueDate));
    newDate.setFullYear(newYear, newMonth, newDay)
    console.log(isDateInThisWeek(newDate));
    console.log(newDate);
    if(hasProject === true) {
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