import { Injectable } from '@angular/core';
import { ToDo, StatusToDo } from 'app/models/todo.model';

@Injectable()
export class TodoService {
  private todos: Array<ToDo> = new Array<ToDo>();
  constructor() { 
    this.setMockData();
  }

  public createToDo(task: ToDo): boolean {
    try {
      this.todos.push(task);
    } catch(ex) {
      return false;
    }
  }

  public getToDos(): Array<ToDo> {
    return this.todos;
  }

  public getTodo(id: number): ToDo {
    return this.todos[id];
  }

  public setMockData(): void {
    this.todos.push(new ToDo('Task 1', StatusToDo.done, new Date()));
    this.todos.push(new ToDo('Task 2', StatusToDo.pending, new Date()));
    this.todos.push(new ToDo('Task 3', StatusToDo.done, new Date(), new Date()));
  }
}
