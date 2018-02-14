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
    } catch (ex) {
      return false;
    }
  }

  public getToDos(): Array<ToDo> {
    return this.todos;
  }

  public getTodo(id: number): ToDo {
    return this.search(id);
  }

  private search(id: number): ToDo {
    return this.todos.find((element: ToDo) => {
      return element.id === id;
    });
  }

  public delete(id: number): boolean {
    const searchItem = this.search(id);
    if (searchItem === undefined) {
      return false;
    } else {
      this.todos.splice(this.todos.indexOf(searchItem), 1);
      return true;
    }
  }

  public updateToDo(updatedTodo: ToDo): boolean {
    try {
      this.todos[this.todos.indexOf(this.search(updatedTodo.id))] = updatedTodo;
      return true;
    } catch (ex) {
      return false;
    }
  }

  public setMockData(): void {
    this.todos.push(new ToDo(1, 'Task 1', StatusToDo.started, new Date()));
    this.todos.push(new ToDo(2, 'Task 2', StatusToDo.pending, new Date()));
    this.todos.push(new ToDo(3, 'Task 3', StatusToDo.done, new Date(), new Date()));
    this.todos.push(new ToDo(4, 'Task 4', StatusToDo.done, new Date(), new Date()));
    this.todos.push(new ToDo(5, 'Task 5', StatusToDo.done, new Date(), new Date()));
    this.todos.push(new ToDo(6, 'Task 6', StatusToDo.done, new Date(), new Date()));
  }
}
