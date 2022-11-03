// import styels
import './styles/styles.css';
// import files
import {addTask, editTask} from './models/components.js';
import deleteTask from './models/delete.js';

const form = document.getElementById('add-to-list');
const listItems = document.getElementById('to-do-list');

const taskArr = [];

const displayTask = (task) => {
  const listItem = `
  <li>
    <div class="check">
      <input type="checkbox" name="${task.description}">
      <input type="text" class="task-description" name="${task.description}" class="task-name" id="task-name" value="${task.description}">
    </div>
    <div class="actions">
      <i class="fa-solid fa-pen-to-square edit"></i>
      <i class="fa-solid fa-trash-can del"></i>
    </div>
  </li>`;
  listItems.insertAdjacentHTML('beforeend', listItem);
};

// displaying tasks on window loading
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => displayTask(task));
});

// Element target for task deletion and updation
listItems.addEventListener('click', (e) => {
  const task = e.target.parentElement.parentElement;
  if (e.target.classList.contains('del')) {
    deleteTask(task, e.target);
  }
//   target element to be edited first
  if (e.target.classList.contains('edit')) {
    editTask(task);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = document.getElementById('task');
  addTask(task.value);
  task.value = '';
});