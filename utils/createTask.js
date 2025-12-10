import { nanoid } from "nanoid";
export default function create(details) {
  let date = new Date().toLocaleDateString();
  let id = nanoid();
  let newTask = {
    id: id,
    details: details,
    date: date,
    Status: "new",
  };
  taskList.push(newTask);
}
