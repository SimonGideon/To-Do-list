import toDos from './models/components.js';
// import styels
import './styles/styles.css';
const toDosDiv = document.getElementById('to-do-list-item');
let toDosItems = (myToDos) => {
  return `
    <div class="toDo-item">
    <span>
        <ul>${myToDos.description}</ul>
        <ul>${myToDos.completed}</ul>
    </span>
    </div>
    `;
}
toDosDiv.innerHTML = `

${toDos.map(toDosItems).join('')}

`;
