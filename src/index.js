import './style.css';
import Load from './icons/reload.png';
import Back from './icons/return.png';
import { getTask } from './dinamically.js';
import { checkStatus } from './status.js';

export { loadThings };

document.querySelector('#loadImg').src = Load;
document.querySelector('#returnImg').src = Back;
getTask();
function loadThings() {
  document.querySelectorAll('.check').forEach((item) => {
    item.addEventListener('click', () => {
      checkStatus(item.parentElement);
    });
  });
}