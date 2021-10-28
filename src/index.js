import './style.css';
import Load from './icons/reload.png';
import Back from './icons/return.png';
import { getTask } from './dinamically.js';

document.querySelector('#loadImg').src = Load;
document.querySelector('#returnImg').src = Back;
getTask();