import { tasks as dummyTasks } from './js/tasks.js';
import { TaskList } from './js/task-list.js';
import { renderTasksTable } from './js/tasks-table.js';
import { renderTasksStats } from './js/tasks-stats.js';

const taskList = new TaskList(dummyTasks);
const activeTasks = taskList.getActiveTasks();
const taskListStats = taskList.getTasksStats();

function renderApp(appRoot) {
  const root = document.querySelector(appRoot);
  const tasksSectionHTML = `
  <section>
    ${renderTasksTable(activeTasks)}
    <button>Add new Task</button>
    ${renderTasksStats(taskListStats)}
  </section>`;
  root.innerHTML = tasksSectionHTML;
}

renderApp('#root');
