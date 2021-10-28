import Dots from './icons/dots.png';

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
      <p>${task.description}</p>
      </div>
      <a href="#"><img src="${Dots}" alt="move order"></a>
    </div>`;
  });

  document.querySelector('.bg-color').innerHTML = newTask;
  const arr = document.querySelectorAll('.check');
  listToDo.forEach((item, index) => {
    arr[index].checked = item.completed;
    if (item.completed) {
      arr[index].parentElement.classList.add('overText');
    } else {
      arr[index].parentElement.classList.remove('overText');
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
}
export { getTask, loadTask };