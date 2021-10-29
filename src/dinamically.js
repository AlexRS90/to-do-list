import Dots from './icons/dots.png';
import Trash from './icons/delete.png';
import { update } from 'lodash';
import { getEventListeners } from 'events';

let listToDo = [
  {
    description: 'Take the kids to the school',
    completed: false,
    index: 1,
  },
  {
    description: 'Cook lunch',
    completed: false,
    index: 2,
  },
  {
    description: 'Microverse tasks',
    completed: false,
    index: 3,
  },
];

function loadTask() {
  localStorage.setItem('lista', JSON.stringify(listToDo));
}

function getTask() {
  if (localStorage.getItem('lista')) {
    const hola = JSON.parse(localStorage.getItem('lista'));
    listToDo = hola;
  }

  let newTask = '';
  listToDo.forEach((task) => {
    newTask += `<div class="new-task d-flex d-between">
      <div class="d-flex check-task">
      <input class="check" type="checkbox">
      <p class="m-task" tabindex="0" contenteditable="true">${task.description}</p>
      </div>
      <a href="#"><img class="c-img" src="${Dots}" alt="move order"></a>
    </div>`;
  });

  document.querySelector('.bg-color').innerHTML = newTask;
  const arr = document.querySelectorAll('.check');
  const arrDelete = document.querySelectorAll('.c-img');
  const arrMTask = document.querySelectorAll('.m-task');
  listToDo.forEach((item, index) => {
    arr[index].checked = item.completed;
    if (item.completed) {
      arr[index].parentElement.classList.add('overText');
      arrDelete[index].src = Trash;
      arrMTask[index].setAttribute('contenteditable', 'false');
      arrDelete[index].addEventListener('click', () => {
        console.log("row "+ index);
      })
    } else {
      arr[index].parentElement.classList.remove('overText');
      arrMTask[index].contenteditable = `true`;
    }
  });

  function checkStatus(box) {
    listToDo.forEach((el) => {
      if (box.innerText === el.description) {
        el.completed = !el.completed;
      }
    });
    loadTask();
    getTask();
  }

  function loadThings() {
    document.querySelectorAll('.check').forEach((item) => {
      item.addEventListener('click', () => {
        checkStatus(item.parentElement);
      });
    });
  }
  
  loadThings();

  function updateTask(i) {
    document.querySelectorAll('.m-task')[i-1].addEventListener('focusout', () => {
      listToDo[i-1].description = document.querySelectorAll('.m-task')[i-1].innerText;
      console.log(listToDo);
      console.log(getEventListeners);
      loadTask();
    });
    document.querySelectorAll('.m-task')[i-1].removeEventListener('focusout', () => {

    });
  }

  function getPosition(index) {
    listToDo.forEach((currPos) => {
      if (currPos.description === index.innerText) {
        console.log("Paso el index");
        updateTask(currPos.index);
      }
    });
  }

  function editTask() {
    document.querySelectorAll('.m-task').forEach((item) => {
      item.addEventListener('focus', () => {
        console.log("focus in")
        getPosition(item);
      });
    });
  }
  editTask();
}



export { getTask, loadTask, listToDo };