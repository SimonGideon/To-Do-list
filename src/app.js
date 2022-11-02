import toDos from './models/components.js';
// import styels
import './styles/styles.css';
const toDosDiv = document.getElementById('to-do-list-item');
let toDosItems = (myToDos) => {
  return `
    <div class="toDo-item">
    <ul>
        <input type="checkbox">
        <span>${myToDos.description}</span>
        
    </ul>
    </div>
    `;
}
toDosDiv.innerHTML = `

${toDos.map(toDosItems).join('')}

`;
