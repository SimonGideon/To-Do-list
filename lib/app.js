"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.json.stringify.js");
require("./styles/styles.css");
var _task_status_update = _interopRequireDefault(require("./models/task_status_update.js"));
var _components = require("./models/components.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import styless

// import files

// variables
const form = document.getElementById('add-to-list');
const btnClear = document.querySelector('.btn-clear');

// editing task
const editTask = task => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskItem = task.children[0].children[1].name;
  const taskIndex = tasks.findIndex(x => x.description === taskItem);
  const taskName = task.querySelector('#task-name').value;
  tasks[taskIndex].description = taskName;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// target item on delete and update
_components.listItems.addEventListener('click', e => {
  const task = e.target.parentElement.parentElement;
  if (e.target.classList.contains('del')) {
    (0, _components.deleteTask)(task, e.target);
  }
  // task will be edited when first the input field of task is updated and then edit icon is clicked
  if (e.target.classList.contains('edit')) {
    editTask(task);
  }
  if (e.target.classList.contains('checkbox')) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    (0, _task_status_update.default)(e.target, tasks);
  }
});

// clearing the completed tasks from list
btnClear.addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filterTasks = tasks.filter(task => task.completed === false);
  filterTasks.forEach((item, ind) => {
    item.index = ind + 1;
  });
  let updatedList = '';
  filterTasks.forEach(task => {
    updatedList += (0, _components.displayTask)(task);
  });
  _components.listItems.innerHTML = updatedList;
  localStorage.setItem('tasks', JSON.stringify(filterTasks));
});
form.addEventListener('submit', e => {
  e.preventDefault();
  const task = document.getElementById('task');
  (0, _components.addTask)(task.value);
  task.value = '';
});