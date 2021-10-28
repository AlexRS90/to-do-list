import { loadTask, listToDo, getTask } from './dinamically.js';

export function checkStatus(box) {
  listToDo.forEach((el) => {
    if (box.innerText === el.description) {
      el.completed = !el.completed;
    }
  });
  loadTask();
  getTask();
}