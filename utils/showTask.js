import input from "analiza-sync";

export default function showTaskBy(userInput, list) {
  if (userInput === "new to old") {
    list.sort((a, b) => {
      return a.Date - b.Date;
    });
  } else if (userInput === "old to new") {
    list.sort((a, b) => {
      return b.Date - a.Date;
    });
  } else if (userInput == "name") {
    let name = input("enter the name of the task");
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === name) {
        console.log(list[i]);
      }
    }
  } else if (userInput === "by status") {
    let Status = input("enter sort by status");
    let StatusList = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].Status === Status) {
        StatusList.push(i);
      }
    }
    return StatusList;
  }
}
