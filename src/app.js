// import styless
import './styles/styles.css';
// import files
import {
  addTask, editTask, displayTask, listItems,
} from './models/components.js';

import deleteTask from './models/delete.js';

const form = document.getElementById('add-to-list');

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