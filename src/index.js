import ToDoItem from './todoitem.js';
import ToDoList from './todolist.js';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const storedTasks = JSON.parse(localStorage.getItem('ToDoList')) || [];
const storedName = JSON.parse(localStorage.getItem('listName')) || 'Demo';
const storedIndex = storedTasks.length;
const myList = new ToDoList(storedTasks, storedIndex, storedName);
const newItemInput = document.querySelector('#new-item-input');
const clearAll = document.querySelector('#clear-all');

myList.renderTaskList(document.querySelector('#list-title-left'), document.querySelector('#to-do-list'));

newItemInput.addEventListener('change', () => {
  const newTask = new ToDoItem(newItemInput.value, false, myList.index);

  myList.addNewTask(document.querySelector('#to-do-list'), newTask);
  newItemInput.value = '';
});

newItemInput.addEventListener('click', () => {
  myList.setNoeditBackground();
});

clearAll.addEventListener('click', () => {
  myList.removeTask('COMPLETED');
});
