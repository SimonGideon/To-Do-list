import toDos from './models/components.js';
// import styels
import './styles/styles.css';

const toDosDiv = document.getElementById('to-do-list-item');
const toDosItems = (myToDos) => `
    <div class="toDo-item">
    <ul>
        <input type="checkbox">
        <span>${myToDos.description}</span><span id= "span">&#8942;</span>
        
    </ul>
    </div>
    `;
toDosDiv.innerHTML = `

${toDos.map(toDosItems).join('')}

`;