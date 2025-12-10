import { nanoid } from "nanoid";
export default function create(details, Status) {
  let date = new Date().toLocaleDateString();
  let id = nanoid();
  let newTask = {
    id: id,
    details: details,
    date: date,
    Status: Status,
  };
  taskList.push(newTask);
}
