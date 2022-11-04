const listItems = document.getElementById('to-do-list');
const taskArr = [];

// display task
const displayTask = (task) => {
  const listItem = `
  <li>
    <div class="check">
      <input type="checkbox" name="checkbox" class="checkbox" id="${task.description}">
      <input type="text" class="task-description" name="${task.description}" class="task-name" id="task-name" value="${task.description}">
    </div>
    <div class="actions">
      <i class="fa-solid fa-pen-to-square edit"></i>
      <i class="fa-solid fa-trash-can del"></i>
    </div>
  </li>`;
  return listItem;
};

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

// adding taks
const addTask = (task) => {
  const taskObj = {};
  taskObj.index = taskArr.length + 1;
  taskObj.description = task;
  taskObj.completed = false;
  const listItem = displayTask(taskObj);
  listItems.insertAdjacentHTML('beforeend', listItem);
  taskArr.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(taskArr));
};

// deleting task
const deleteTask = (task, element) => {
  const taskName = task.children[0].children[1].value;
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskIndex = tasks.findIndex((x) => x.description === taskName);
  tasks.splice(taskIndex, 1);
  tasks.forEach((item, ind) => {
    item.index = ind + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  element.parentElement.parentElement.remove();
};

export {
  displayTask, addTask, deleteTask, listItems, taskArr,
};
