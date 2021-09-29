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
    return this.tasks.filter((task) => !task.isArchived);
  }
  getArchivedTasks() {
    return this.tasks.filter((task) => task.isArchived);
  }
  getTasksByCategory(category) {
    return this.tasks.filter(
      (task) => task.category.toUpperCase() === category.toUpperCase()
    );
  }
  getActiveTasksByCategory(category) {
    return this.getTasksByCategory(category).filter((task) => !task.isArchived);
  }
  getArchivedTasksByCategory(category) {
    return this.getTasksByCategory(category).filter((task) => task.isArchived);
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
  updateTask(data) {
    const id = data.id;
    this.tasks = this.tasks.map((task) => {
      return task.id === id ? { ...task, ...data } : task;
    });
  }
  archiveTask(id) {
    this.updateTask({ id, isArchived: true });
  }
  unArchiveTask(id) {
    this.updateTask({ id, isArchived: false });
  }
  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  deleteTasks() {
    this.tasks.length = 0;
  }
  archiveTasks() {
    this.tasks = this.tasks.map((task) => ({ ...task, isArchived: true }));
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
