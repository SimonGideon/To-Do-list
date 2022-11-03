// function for adding task to list
const addTask = (task) => {
  const taskObj = {};
  taskObj.index = taskArr.length + 1;
  taskObj.description = task;
  taskObj.completed = false;
  displayTask(taskObj);
  taskArr.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(taskArr));
};

// drop todos
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

// editing todos
const editTask = (task) => {
  const taskItem = task.children[0].children[1].name;
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskIndex = tasks.findIndex((x) => x.description === taskItem);
  const taskName = task.querySelector('#task-name').value;
  tasks[taskIndex].description = taskName;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export {addTask, deleteTask, editTask}