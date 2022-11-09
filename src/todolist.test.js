import ToDoList from './todolist.js';
import ToDoItem from './todoitem.js';

const storedTasks = [];
const storedName = 'Demo';
const storedIndex = storedTasks.length;
const myList = new ToDoList(storedTasks, storedIndex, storedName);

const newTask = new ToDoItem('value 1', false, myList.index);

describe('add function', () => {
  document.body.innerHTML = '<div><ul id="to-do-list"></ul></div>';
  document.body.innerHTML += '<span id="red-badge" class="badge2"></span>';

  test('add to array', () => {
    const parentDiv = document.querySelector('#to-do-list');

    myList.addNewTask(parentDiv, newTask);
    expect(myList.index).toBe(1);
  })

  test('test dom', () => {
    const parentDivCount = document.querySelectorAll('#to-do-list');
    expect(parentDivCount).toHaveLength(1);
  })

  test('test local storage', () => {
    const storedTasks = JSON.parse(localStorage.getItem('ToDoList')) || [];
    expect(storedTasks).toHaveLength(1);
  })

  test('update badge', () => {
    const redbadge = document.querySelector('#red-badge').textContent;
    expect(parseInt(redbadge.textContent, 10)).toMatch(1);
  })
});
