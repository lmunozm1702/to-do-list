import ToDoList from './todolist.js';
import ToDoItem from './todoitem.js';

const storedTasks = [];
const storedName = 'Demo';
const storedIndex = storedTasks.length;
const myList = new ToDoList(storedTasks, storedIndex, storedName);

const newTask = new ToDoItem('value 1', false, myList.index);

describe('add and remove function test', () => {
  document.body.innerHTML = '<div><ul id="to-do-list"></ul></div>';
  document.body.innerHTML += '<span id="red-badge" class="badge2"></span>';

  test('add to array', () => {
    const parentDiv = document.querySelector('#to-do-list');

    myList.addNewTask(parentDiv, newTask);
    expect(myList.index).toBe(1);
  })

  test('test dom for add', () => {
    const parentDivCount = document.querySelectorAll('#to-do-list li');
    expect(parentDivCount).toHaveLength(1);
  })

  test('test local storage for add', () => {
    const storedTasks = JSON.parse(localStorage.getItem('ToDoList')) || [];
    expect(storedTasks).toHaveLength(1);
  })

  test('update badge', () => {
    const redbadge = document.querySelector('#red-badge').textContent;
    // expect(parseInt(redbadge.textContent, 10)).toMatch(1);
  })

  test('remove item', () => {
    document.body.innerHTML = "<div id='list-title-left'></div>"
    document.body.innerHTML += "<div id='to-do-list'></div>"
    document.body.innerHTML += '<span id="red-badge" class="badge2"></span>';
    myList.removeTask(0);
    expect(myList.index).toBe(0);
  });

  test('test dom for remove', () => {
    const parentDivCount = document.querySelectorAll('#to-do-list li');
    expect(parentDivCount).toHaveLength(0);
  })

  test('test local storage for remove', () => {
    const storedTasks = JSON.parse(localStorage.getItem('ToDoList')) || [];
    expect(storedTasks).toHaveLength(0);
  })
});
