import _ from 'lodash';
import './style.css';
import sampleData from './sampleData.js';

class toDoItem {
  constructor(description = null, completed = false, index = -1) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

class toDoList {
  constructor(taskList = [], index = 0, listName = '') {
    this.taskList = taskList;
    this.index = index;
    this.listName = listName;
  }

  renderTaskList = (titleDiv, parentDiv) => {
    titleDiv.textContent = this.listName;

    let orderedList = this.taskList.sort((a, b) => {
      return a.index - b.index;
    });

    orderedList.forEach(listItem => {
      let taskToAdd = document.createElement('li');
      taskToAdd.className = 'single-task';
      taskToAdd.textContent = listItem.description;
      parentDiv.appendChild(taskToAdd);
    });
  }


}

let myList = new toDoList(sampleData, 3, "My first list");
myList.renderTaskList(document.querySelector('#list-title-left'), document.querySelector('#to-do-list'));

