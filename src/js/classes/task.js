import { makeid } from '../utils.js';
export class Task {
  constructor({ category, content, name }) {
    this.id = makeid();
    this.category = category;
    this.content = content;
    this.name = name;
    this.isArchived = false;
    this.created = Date.now();
  }
}
