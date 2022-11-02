import components from './components.js';
// image
import logo from './images/icons8-disney-logo.svg';
// styles
import './styles/styles.css';

const body = document.querySelector('body');
const todoList = document.createElement('div');
todoList.classList.add('todo-list');
todoList.innerHTML = `
                    <div class="todo-title">
                        <h1>Today's To Do</h1>
                        <span class=reload>&#x21bb;</span>
                    </div>
                      <hr>
                      <div class="input">
                      <input type="text" class="todo-input" placeholder="Add to your list">
                      </input>
                        <span class="enter-input">&#x2714;</span>
                      </div>
                      <hr>
                      <div class="todo-list-items"></div>
                      <button class="btn">Clear all completed</button>
                      `;
body.appendChild(todoList);