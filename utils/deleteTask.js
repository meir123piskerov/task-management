export default function deleteTask(id) {
  for (let i = 0; i < listTask.length; i++) {
    if (i[id] === id) {
      listTask.splice(i, 1);
    } else {
      console.log("id not in tasks");
    }
  }
}
