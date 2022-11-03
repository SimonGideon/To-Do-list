import {display, toDosDiv} from '../app.js';
const toDoItem = document.getElementById('todo-input'); 
const form = document.getElementById('form');
const toDos = [];

// display the list form local storage on reloading
window.addEventListener('DOMContentLoaded', ()=>{
  if (localStorage.getItem('toDos') !== null) {
    const getbook = JSON.parse(localStorage.getItem('toDos'));
  
    getbook.forEach((myToDos) => {
      toDosDiv.innerHTML +=  `
      <div class="toDo-item">
      <ul>
          <input type="checkbox" id="checkingIn">
          <span>${myToDos.description}</span>
          <span id="actions">
            <i id="span" class="fa-solid fa-pen-to-square edit"></i>
            <i id="span" class="fa-solid fa-trash-can del"></i>
        </span>
      </ul>
      </div>
      `;
    });
  }

})

// add function into an array
const add = () => {
  const toDoitem = {
    description: document.getElementById('todo-input').value,
    completed: false,
    index: toDos.length + 1,
  };
  if (toDoItem.value != '') {
    toDos.push(toDoitem);
    // storing the new array in local storage
    localStorage.setItem('toDos', JSON.stringify(toDos));
    display();
  } else {
    return 1;
  }
}


form.addEventListener('click', (e)=>{
  e.preventDefault();
  add();
  form.reset();
  console.log(toDos);
})

export default toDos;