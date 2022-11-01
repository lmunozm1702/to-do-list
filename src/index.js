import ToDoItem from './todoitem.js';
import ToDoList from './todolist.js';
import './style.css';
import sampleData from './sampleData.js';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


let storedTasks = JSON.parse(localStorage.getItem('ToDoList')) || [];
let storedName = JSON.parse(localStorage.getItem('listName')) || 'Demo';

const myList = new ToDoList(storedTasks, storedTasks.length, storedName);
myList.renderTaskList(document.querySelector('#list-title-left'), document.querySelector('#to-do-list'));

const newItemInput = document.querySelector('#new-item-input');
newItemInput.addEventListener('change', () => {
  const newTask = new ToDoItem(newItemInput.value, false, myList.index);
  myList.index += 1;
  myList.addNewTask(document.querySelector('#to-do-list'), newTask);
  newItemInput.value = '';
});

newItemInput.addEventListener('click', () => {
  myList.setNoeditBackground();
});
