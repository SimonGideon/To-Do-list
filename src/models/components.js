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
      <i class="fa-solid fa-trash del"></i>
    </div>
  </li>`;
  listItems.insertAdjacentHTML('beforeend', listItem);
};

// displaying tasks on window loading
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => displayTask(task));
});

// function for adding task to list
const addTask = (task) => {
  const taskObj = {
    index: taskArr.length + 1,
    description: task,
    completed: false,
  };
  
  displayTask(taskObj);
  taskArr.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(taskArr));
};

// editing todos
const editTask = (task) => {
  const taskItem = task.children[0].children[1].name;
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskIndex = tasks.findIndex((x) => x.description === taskItem);
  const taskName = task.querySelector('#task-name').value;
  tasks[taskIndex].description = taskName;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export {
  addTask, editTask, displayTask, listItems,
};