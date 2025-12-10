export default function deleteTask(id, list) {
  for (let i = 0; i < listTask.length; i++) {
    if (i[id] === id) {
      list.splice(i, 1);
    } else {
      console.log("id not in tasks");
    }
  }
}
