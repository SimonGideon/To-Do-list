/* eslint-disable import/no-cycle */
import { listItems } from './util';

// hold items on window onload
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  // displaying tasks on window loading
  tasks.forEach((task) => {
    const listItem = displayTask(task);
    listItems.insertAdjacentHTML('beforeend', listItem);
  });
  // setting checkbox value to checked on window refresh if status is completed
  const completedTasksIndex = tasks.filter((task) => task.completed === true);
  for (let i = 0; i < completedTasksIndex.length; i += 1) {
    for (let j = 0; j < (listItems.children).length; j += 1) {
      if (j === (completedTasksIndex[i].index - 1)) {
        listItems.children[j].children[0].children[0].checked = true;
      }
    }
  }
});
