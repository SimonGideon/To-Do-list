const taskArr = [];
const listItems = document.getElementById('to-do-list');
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

export { taskArr, addTask, listItems };