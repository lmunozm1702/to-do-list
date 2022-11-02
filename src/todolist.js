class ToDoList {
  constructor(taskList = [], index = 0, listName = '') {
    this.taskList = taskList;
    this.index = index;
    this.listName = listName;
  }

  renderTaskList = (titleDiv, parentDiv) => {
    titleDiv.textContent = this.listName;

    const orderedList = this.taskList.sort((a, b) => a.index - b.index);

    orderedList.forEach((listItem) => {
      this.renderTask(parentDiv, listItem);
    });
  }

  renderTask = (parentDiv, task) => {
    const taskToAdd = document.createElement('li');
    taskToAdd.className = 'single-task no-edition';
    taskToAdd.id = `li-task-${task.index}`;
    taskToAdd.onclick = () => {
      this.setNoeditBackground();
      taskToAdd.classList.replace('no-edition', 'edition');
      document.querySelector(`#vertical-${task.index}`).classList.replace('visible', 'hidden');
      document.querySelector(`#trash-${task.index}`).classList.replace('hidden', 'visible');
    };
    parentDiv.appendChild(taskToAdd);

    const taskDivLeft = document.createElement('div');
    taskDivLeft.id = `left-div-li-${task.index}`;
    taskDivLeft.className = 'left-div-li';
    taskToAdd.appendChild(taskDivLeft);

    let taskIcon = document.createElement('i');
    taskIcon.id = `square-${task.index}`;
    taskIcon.className = 'fa-regular fa-square grey-icon';
    if (task.completed) {
      taskIcon.classList.add('hidden');
    } else {
      taskIcon.classList.add('visible');
    }
    taskDivLeft.appendChild(taskIcon);

    taskIcon = document.createElement('i');
    taskIcon.id = `check-${task.index}`;
    taskIcon.className = 'fa-solid fa-check green-icon';

    if (task.completed) {
      taskIcon.classList.add('visible');
    } else {
      taskIcon.classList.add('hidden');
    }
    taskDivLeft.appendChild(taskIcon);

    const taskDesc = document.createElement('input');
    taskDesc.type = 'text';
    taskDesc.className = 'li-input-text';
    if (task.completed) {
      taskDesc.classList.add('text-completed');
    } else {
      taskIcon.classList.add('text-uncompleted');
    }
    taskDesc.id = `li-input-text-${task.index}`;
    taskDesc.value = task.description;
    taskDesc.onchange = (element) => {
      this.editTask(task.index, element.target.value);
    };
    taskDivLeft.appendChild(taskDesc);

    const taskDivRight = document.createElement('div');
    taskDivRight.id = `right-div-li-${task.index}`;
    taskToAdd.appendChild(taskDivRight);

    const divEllip = document.createElement('div');
    divEllip.id = `ellip-${task.index}`;
    taskDivRight.appendChild(divEllip);

    taskIcon = document.createElement('i');
    taskIcon.id = `vertical-${task.index}`;
    taskIcon.className = 'fa-solid fa-ellipsis-vertical grey-icon visible';
    divEllip.appendChild(taskIcon);

    const divTrash = document.createElement('div');
    divTrash.id = `div-trash-${task.index}`;
    divTrash.onclick = () => {
      this.removeTask(task.index);
    };
    taskDivRight.appendChild(divTrash);
    taskIcon = document.createElement('i');
    taskIcon.id = `trash-${task.index}`;
    taskIcon.className = 'fa-regular fa-trash-can grey-icon hidden';
    divTrash.appendChild(taskIcon);
  }

  editTask = (index, value) => {
    this.taskList[index].description = value;
    localStorage.setItem('ToDoList', JSON.stringify(this.taskList));
  }

  addNewTask = (parentDiv, task) => {
    task.index = this.index;
    this.index += 1;
    this.taskList.push(task);
    this.renderTask(parentDiv, task);
    localStorage.setItem('ToDoList', JSON.stringify(this.taskList));
  }

  setNoeditBackground = () => {
    this.taskList.forEach((listItem) => {
      document.querySelector(`#li-task-${listItem.index}`).classList.replace('edition', 'no-edition');
      document.querySelector(`#vertical-${listItem.index}`).classList.replace('hidden', 'visible');
      document.querySelector(`#trash-${listItem.index}`).classList.replace('visible', 'hidden');
    });
  }

  resetIndexes = () => {
    let i = 0;
    this.taskList.forEach((listItem) => {
      listItem.index = i;
      i += 1;
    });
    this.index = i;
  }

  removeTask = (listId) => {
    this.taskList = this.taskList.filter(
      (task) => task.index.toString() !== listId.toString(),
    );
    this.resetIndexes();
    localStorage.setItem('ToDoList', JSON.stringify(this.taskList));
    const lis = document.querySelectorAll('.single-task');
    lis.forEach((element) => {
      document.querySelector(`#${element.id}`).remove();
    });
    this.renderTaskList(document.querySelector('#list-title-left'), document.querySelector('#to-do-list'));
  }
}

export default ToDoList;