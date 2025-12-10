import { nanoid } from "nanoid";
export default function create(details, Status, name, list) {
  let date = new Date().toLocaleDateString();
  let id = nanoid();
  let newTask = {
    id: id,
    name: name,
    details: details,
    date: date,
    Status: Status,
  };
  list.push(newTask);
}
