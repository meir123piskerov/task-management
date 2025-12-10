export default function arrangeTask(id, details) {
  for (let i = 0; i < listTask.length; i++) {
    if (i[id] === id) {
      i.details = details;
    } else {
      console.log("id not in list tasks");
    }
  }
}
