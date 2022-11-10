"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.json.stringify.js");
const updateTaskStatus = (el, tasks) => {
  el.addEventListener('change', e => {
    const taskIndex = tasks.findIndex(x => x.description === e.target.id);
    if (e.target.checked) {
      tasks[taskIndex].completed = true;
    } else {
      tasks[taskIndex].completed = false;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
};
var _default = updateTaskStatus;
exports.default = _default;