"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.json.stringify.js");
// drop todos
// deleting task
const deleteTask = (task, element) => {
  const taskName = task.children[0].children[1].value;
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskIndex = tasks.findIndex(x => x.description === taskName);
  tasks.splice(taskIndex, 1);
  tasks.forEach((item, ind) => {
    item.index = ind + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  element.parentElement.parentElement.remove();
};
var _default = deleteTask;
exports.default = _default;