import { Task } from './task.js';

export class TaskList {
  constructor(tasks = []) {
    this.tasks = tasks;
  }
  addTask(task) {
    this.tasks.push(new Task(task));
  }
  getTasks() {
    return this.tasks;
  }
  getActiveTasks() {
    return this.tasks.filter((task) => !task.isArchieved);
  }
  getTasksByCategory(category) {
    return this.tasks.filter((task) => task.category === category);
  }
  getActiveTasksByCategory(category) {
    return this.getTasksByCategory(category).filter(
      (task) => !task.isArchieved
    );
  }
  getArchivedTasksByCategory(category) {
    return this.getTasksByCategory(category).filter((task) => task.isArchieved);
  }
  getActiveTasksCountByCategory(category) {
    return this.getActiveTasksByCategory(category).length;
  }
  getArchivedTasksCountByCategory(category) {
    return this.getArchivedTasksByCategory(category).length;
  }
  getTask(id) {
    return this.tasks.find((task) => task.id === id);
  }
  updateTask(id, data) {
    this.tasks = this.tasks.map((task) => {
      return task.id === id ? { ...task, data } : task;
    });
  }
  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  removeTasks() {
    this.tasks = [];
  }
  getTasksStats() {
    const categories = ['Task', 'Random Thought', 'Idea', 'Quote'];
    return categories.map((category) => ({
      name: category,
      activeCount: this.getActiveTasksCountByCategory(category),
      archivedCount: this.getArchivedTasksCountByCategory(category),
    }));
  }
}
