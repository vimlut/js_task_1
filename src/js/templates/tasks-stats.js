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

function getTaskStatsTemplate(data) {
  return `
    <table class="data-table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Active</th>
            <th>Archived</th>
          </tr>
          ${data.reduce((acc, curr) => acc + renderCategory(curr), '')}
        </tbody>
    </table>
    `;
}

export { getTaskStatsTemplate };
