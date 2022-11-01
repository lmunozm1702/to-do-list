class ToDoItem {
  constructor(description = null, completed = false, index = -1) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export default ToDoItem;