export class Task {
  constructor({ id, category, content, title }) {
    this.id = id;
    this.category = category;
    this.content = content;
    this.title = title;
    this.isArchieved = false;
    this.created = Date.now();
  }
}
