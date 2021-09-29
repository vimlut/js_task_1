import { dummyTasks } from './js/dummy-tasks.js';
import { TaskList } from './js/classes/task-list.js';
import {
  getTasksTableTemplate,
  getTaskStatsTemplate,
} from './js/templates/index.js';

const root = document.querySelector('#root');
const dialog = document.querySelector('#js-task-dialog');
const taskForm = dialog.querySelector('#js-task-form');
let modalMode = 'add';
let showActiveTasks = true;

const taskList = new TaskList(dummyTasks);

function renderApp() {
  const taskData = showActiveTasks
    ? taskList.getActiveTasks()
    : taskList.getArchivedTasks();
  const tasksSectionHTML = `
    ${getTasksTableTemplate(taskData)}
    ${getTaskStatsTemplate(taskList.getTasksStats())}
  `;
  root.innerHTML = tasksSectionHTML;
}

function handleDeleteAllTasksClick() {
  if (confirm('Are you sure you want to delete ALL tasks?')) {
    taskList.deleteTasks();
    renderApp();
  }
}

function handleShowArchivedTasksClick() {
  showActiveTasks = !showActiveTasks;
  renderApp();
}

function handleAddTaskClick() {
  modalMode = 'add';
  dialog.showModal();
}

function handleEditTaskClick(e) {
  modalMode = 'edit';
  const task = taskList.getTask(e.target.dataset.taskId);
  for (const key in task) {
    if (taskForm.elements[key]) {
      taskForm.elements[key].value = task[key];
    }
  }
  dialog.showModal();
}

function handleArchiveTaskClick(e) {
  const taskId = e.target.dataset.taskId;
  const isTaskArchived = taskList.getTask(taskId).isArchived;
  console.log(isTaskArchived);
  isTaskArchived
    ? taskList.unArchiveTask(taskId)
    : taskList.archiveTask(taskId);
  renderApp();
}

function handleDeleteTaskClick(e) {
  if (confirm('Are you sure you want to delete this task?')) {
    taskList.deleteTask(e.target.dataset.taskId);
    renderApp();
  }
}

function handleTaskFormSubmit(e) {
  e.preventDefault();
  const newTask = Object.fromEntries(new FormData(taskForm));
  modalMode === 'add'
    ? taskList.addTask(newTask)
    : taskList.updateTask(newTask);
  taskForm.reset();
  this.closest('dialog').close();
  renderApp();
}

taskForm.addEventListener('submit', handleTaskFormSubmit);

root.addEventListener('click', function (e) {
  if (e.target.id === 'js-add-task') handleAddTaskClick();
  if (e.target.id === 'js-delete-all') handleDeleteAllTasksClick();
  if (e.target.id === 'js-archive-all') handleShowArchivedTasksClick();
  if (e.target.className.includes('js-edit-task')) handleEditTaskClick(e);
  if (e.target.className.includes('js-archive-task')) handleArchiveTaskClick(e);
  if (e.target.className.includes('js-delete-task')) handleDeleteTaskClick(e);
});

renderApp();
