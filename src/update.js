import * as dinamic from './dinamically.js';

export default function addTask() {
    const newTask = document.querySelector('.input-text').value;
    if (newTask === '') {
      console.log("Write a task");
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