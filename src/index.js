import _ from 'lodash';
import './style.css';
import Dots from './icons/dots.png';
import Load from './icons/reload.png';
import Back from './icons/return.png';

const listToDo = [
  {
    description: 'Take the kids to the school',
    completed: false,
    index: 1,
  },
  {
    description: 'Cook the lunch',
    completed: false,
    index: 2,
  },
  {
    description: 'Microverse task',
    completed: false,
    index: 3,
  },
];

let newTask = '';
listToDo.forEach((task) => {
  newTask += `<div class="new-task d-flex d-between">
    <div class="d-flex check-task">
      <input type="checkbox">
      <p>${task.description}</p>
    </div>
    <a href="#"><img src="${Dots}" alt="move order"></a>
  </div>`;
});

document.querySelector('.bg-color').innerHTML += newTask;
document.querySelector('#loadImg').src = Load;
document.querySelector('#returnImg').src = Back;