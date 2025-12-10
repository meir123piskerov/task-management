export default function arrangeTask(id, details, list) {
  for (let i = 0; i < list.length; i++) {
    if (i[id] === id) {
      i.details = details;
    } else {
      console.log("id not in list tasks");
    }
  }
}
