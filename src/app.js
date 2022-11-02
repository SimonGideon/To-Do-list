import toDos from './models/components.js';
// import styels
import './styles/styles.css';

const body = document.querySelector('body');
const todoList = document.createElement('div');
todoList.classList.add('todo-list');
todoList.innerHTML = `
        <div class="todo-title">
            <h1>Today's To Do</h1>
            <span class=reload>&#x21bb;</span>
        </div>
        <ul class="input">
            <input type="text" class="todo-input" placeholder="Add to your list">
            <span class="enter-input">&#x2714;</span>
        </ul>
        <div id="to-do-list-item">
        </div>
        <div class="button">
            <button type="reset" class="btn">Clear all completed</button>
        </div>
`;
body.appendChild(todoList);

const toDosDiv = document.getElementById('to-do-list-item');
const toDosItems = (myToDos) => `
    <div class="toDo-item">
    <ul>
        <input type="checkbox">
        <span>${myToDos.description}</span>
        
    </ul>
    </div>
    `;
toDosDiv.innerHTML = `

${toDos.map(toDosItems).join('')}

`;