// import styless
import './styles/styles.css';
// import files
import updateTaskStatus from './models/task_status_update.js';
import {
  displayTask, addTask, deleteTask, listItems,
} from './models/components.js';
// variables
const form = document.getElementById('add-to-list');
const btnClear = document.querySelector('.btn-clear');

// editing task
const editTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskItem = task.children[0].children[1].name;
  const taskIndex = tasks.findIndex((x) => x.description === taskItem);
  const taskName = task.querySelector('#task-name').value;
  tasks[taskIndex].description = taskName;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// target item on delete and update
listItems.addEventListener('click', (e) => {
  const task = e.target.parentElement.parentElement;
  if (e.target.classList.contains('del')) {
    deleteTask(task, e.target);
  }
  // task will be edited when first the input field of task is updated and then edit icon is clicked
  if (e.target.classList.contains('edit')) {
    editTask(task);
  }
  if (e.target.classList.contains('checkbox')) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    updateTaskStatus(e.target, tasks);
  }
});

// clearing the completed tasks from list
btnClear.addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filterTasks = tasks.filter((task) => task.completed === false);
  filterTasks.forEach((item, ind) => {
    item.index = ind + 1;
  });
  let updatedList = '';
  filterTasks.forEach((task) => {
    updatedList += displayTask(task);
  });
  listItems.innerHTML = updatedList;
  localStorage.setItem('tasks', JSON.stringify(filterTasks));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = document.getElementById('task');
  addTask(task.value);
  task.value = '';
});