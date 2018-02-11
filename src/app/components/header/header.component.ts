import { Component, OnInit } from '@angular/core';
import { Constants } from '../../models/constants.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public todos: string;
  public createTodo: string;

  constructor() { }

  ngOnInit() {
    this.title = Constants.Views.NameApp;
    this.todos = Constants.Views.ToDos;
    this.createTodo = Constants.Views.CreateToDo;
  }

}
