import ToDoList from './todolist.js';
import ToDoItem from './todoitem.js';

const storedTasks = [];
const storedName = 'Demo';
const storedIndex = storedTasks.length;
const myList = new ToDoList(storedTasks, storedIndex, storedName);

const newTask = new ToDoItem('value 1', false, myList.index);


test('add to array', () => {
  document.body.innerHTML = '<div><ul id="to-do-list"></ul></div>';
  const parentDiv = document.querySelector('#to-do-list');

  myList.addNewTask(parentDiv, newTask);
  expect(myList.index).toBe(1);

  const parentDivCount = document.querySelectorAll('#to-do-list');
  expect(parentDivCount).toHaveLength(1);
});
