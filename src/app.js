import toDos from './models/components.js';
// import styels
import './styles/styles.css';
const toDosDiv = document.getElementById('to-do-list-item');
const display = () => {
const toDosItems = (myToDos) => `
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
toDosDiv.innerHTML = `

${toDos.map(toDosItems).join('')}

`;
}

export {display, toDosDiv};