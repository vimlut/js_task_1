function renderTableHeader() {
  return `
    <tr>
        <th>Name</th>
        <th>Active</th>
        <th>Archived</th>
    </tr>
    `;
}

function renderCategory(data) {
  const { name, activeCount, archivedCount } = data;
  return `
    <tr>
        <td>${name}</td>
        <td>${activeCount}</td>
        <td>${archivedCount}</td>
    </tr>
    `;
}
function renderCategories(data) {
  return data.reduce((acc, curr) => acc + renderCategory(curr), '');
}

function renderTasksStats(data) {
  return `
    <table class="data-table">
        <tbody>
            ${renderTableHeader()}
            ${renderCategories(data)}
        </tbody>
    </table>
    `;
}

export { renderTasksStats };
