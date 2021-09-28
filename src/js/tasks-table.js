function renderTableHeader() {
  return `
            <tr>
              <th>Name</th>
              <th>Created</th>
              <th>Category</th>
              <th>Content</th>
              <th>Dates</th>
              <th></th>
              <th><button class="ui-ibtn ui-ibtn--arch" title="Archieve all"></button>
              <th><button class="ui-ibtn ui-ibtn--del" title="Delete All"></th>
        </tr>
        `;
}

function renderTask(data) {
  const { id, category, name, created, content, dates } = data;
  return `
          <tr data-task-id="${id}">
              <td>${name}</td>
              <td>${created}</td>
              <td>${category}</td>
              <td>${content}</td>
              <td>${dates}</td>
              <td><button class="ui-ibtn ui-ibtn--edit" title="Edit task"></td>
              <td><button class="ui-ibtn ui-ibtn--arch" title="Archieve task"></td>
              <td><button class="ui-ibtn ui-ibtn--del" title="Delete task"></td>
          </tr>
      `;
}
function renderTasks(data) {
  return data.reduce((acc, curr) => acc + renderTask(curr), '');
}

function renderTasksTable(data) {
  return `
          <table class="data-table">
              <tbody>
                  ${renderTableHeader()}
                  ${renderTasks(data)}
              </tbody>
          </table>
      `;
}

export { renderTasksTable };
