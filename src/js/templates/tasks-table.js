function renderTableHeader(data) {
  return `
            <tr>
              <th>Name</th>
              <th>Created</th>
              <th>Category</th>
              <th>Content</th>
              <th>Dates</th>
              <th></th>
              <th>
                <button
                  id="js-archive-all"
                  class="ui-ibtn ui-ibtn--arch"
                  title="Toggle Active/Archived tasks"
                >
                </button>
              <th>
                <button
                  id="js-delete-all"
                  class="ui-ibtn ui-ibtn--del"
                  title="Delete All"
                  ${data.length ? '' : 'disabled'}
                >
                </button>
              </th>
        </tr>
        `;
}

function renderTask(data) {
  const { id, category, name, created, content, isArchived } = data;
  const date = new Date(created).toLocaleDateString();
  const dates = content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g)?.join(', ') || '';
  const contentMaxLength = 19;
  const taskContent =
    content.length > contentMaxLength
      ? content.substring(0, 19) + ' ...'
      : content;

  return `
          <tr>
              <td>${name}</td>
              <td>${date}</td>
              <td>${category}</td>
              <td>${taskContent}</td>
              <td>${dates}</td>
              <td>
                <button 
                  class="js-edit-task ui-ibtn ui-ibtn--edit"
                  title="Edit task"
                  data-task-id="${id}" ${isArchived ? 'disabled' : ''}
                >
              </td>
              <td><button class="js-archive-task ui-ibtn ui-ibtn--arch" title="${
                isArchived ? 'Unarchive task' : 'Archive task'
              }" data-task-id="${id}"></td>
              <td><button class="js-delete-task ui-ibtn ui-ibtn--del" title="Delete task" data-task-id="${id}"></td>
          </tr>
      `;
}

function getTasksTableTemplate(data) {
  return `
          <table class="data-table">
              <tbody>
                  ${renderTableHeader(data)}
                  ${data.reduce((acc, curr) => acc + renderTask(curr), '')}
              </tbody>
          </table>
          <button id="js-add-task">Add new Task</button>
      `;
}

export { getTasksTableTemplate };
