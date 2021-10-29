import * as dinamic from './dinamically.js';

function addTask() {
  const newTask = document.querySelector('.input-text').value;
  if (newTask === '') {
    document.getElementById('val-entry').classList.add('validationEntry');
  } else {
    const obj = {
      description: newTask,
      completed: false,
      index: dinamic.listToDo.length + 1,
    };
    dinamic.listToDo.push(obj);
    dinamic.loadTask();
    dinamic.getTask();
    document.querySelector('.input-text').value = '';
  }
}

export default addTask;