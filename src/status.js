import { loadTask, listToDo, getTask } from './dinamically.js';

export { checkStatus };

function checkStatus(box) {
  listToDo.forEach((el) => {
    if (box.innerText === el.description) {
      el.completed = !el.completed;
    }
  });
  loadTask();
  getTask();
}