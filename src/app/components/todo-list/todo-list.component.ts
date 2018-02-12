import { ToDo } from 'app/models/todo.model';
import { TodoService } from 'app/services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/models/constants.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public toDos: Array<ToDo>;
  public nameTask = Constants.Components.List.TaskName;
  public statusTask = Constants.Components.List.TaskStatus;
  public startTask = Constants.Components.List.TaskStart;
  public endTask = Constants.Components.List.TaskEnd;

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.toDos = this.toDoService.getToDos();
  }



}
