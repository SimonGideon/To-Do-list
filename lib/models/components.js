"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTask = void 0;
Object.defineProperty(exports, "deleteTask", {
  enumerable: true,
  get: function get() {
    return _delete.default;
  }
});
exports.taskArr = exports.listItems = exports.displayTask = void 0;
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.json.stringify.js");
var _delete = _interopRequireDefault(require("./delete.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const listItems = document.getElementById('to-do-list');
exports.listItems = listItems;
const taskArr = [];

// display task
exports.taskArr = taskArr;
const displayTask = task => {
  const listItem = "\n  <li>\n    <div class=\"check\">\n      <input type=\"checkbox\" name=\"checkbox\" class=\"checkbox\" id=\"".concat(task.description, "\">\n      <input type=\"text\" class=\"task-description\" name=\"").concat(task.description, "\" class=\"task-name\" id=\"task-name\" value=\"").concat(task.description, "\">\n    </div>\n    <div class=\"actions\">\n      <i class=\"fa-solid fa-pen-to-square edit\"></i>\n      <i class=\"fa-solid fa-trash-can del\"></i>\n    </div>\n  </li>");
  return listItem;
};

// hold items on window onload
exports.displayTask = displayTask;
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  // displaying tasks on window loading
  tasks.forEach(task => {
    const listItem = displayTask(task);
    listItems.insertAdjacentHTML('beforeend', listItem);
  });
  // setting checkbox value to checked on window refresh if status is completed
  const completedTasksIndex = tasks.filter(task => task.completed === true);
  for (let i = 0; i < completedTasksIndex.length; i += 1) {
    for (let j = 0; j < listItems.children.length; j += 1) {
      if (j === completedTasksIndex[i].index - 1) {
        listItems.children[j].children[0].children[0].checked = true;
      }
    }
  }
});

// adding taks
const addTask = task => {
  const taskObj = {};
  taskObj.index = taskArr.length + 1;
  taskObj.description = task;
  taskObj.completed = false;
  const listItem = displayTask(taskObj);
  listItems.insertAdjacentHTML('beforeend', listItem);
  taskArr.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(taskArr));
};
exports.addTask = addTask;