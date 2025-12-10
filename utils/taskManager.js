import input from "analiza-sync";
import { log } from "console";
import { create } from "domain";
import deleteTask from "./deleteTask.js";
import arrangeTask from "./arrangementTask.js";
import showTaskBy from "./showTask.js";
export default function taskManager() {
  let taskLIst = [];
  log(
    "1.to create a new task\n2. to delete a task by id\n3.to arrange a task\n4.to sort the list task by your choice"
  );
  let userInput = input("enter what u do to");
  if (userInput === "1") {
    let details = input("enter the task details");
    let Status = input("what the status of the task");
    let name = input("name of the task");
    create(details, Status, name, taskLIst);
  } else if (userInput === "2") {
    let id = input("enter the id task u want to delete");
    deleteTask(id);
  } else if (userInput === "3") {
    let idUser = input("enter the id task u want to delete");
    let detailsUser = input("enter the task details");
    arrangeTask(idUser, detailsUser, taskLIst);
  } else if (userInput === "4") {
    let sortBy = input("by why u want to sort");
    showTaskBy(sortBy, taskLIst);
  }
}
