import toDos from './models/components.js';
// import styels
import './styles/styles.css';
const toDosDiv = document.getElementById('to-do-list-item');
let toDosItems = (myToDos) => {
  return `
    <div class="toDo-item">
    <span>
        <input type="text" placeholder="${myToDos.description}">
        <p class="speaker-name">${myToDos.description}</p>
        <p class="speaker-profession">${myToDos.completed}</p>
    </span>
    </div>
    `;
}
toDosDiv.innerHTML = `

${toDos.map(toDosItems).join('')}

`;
