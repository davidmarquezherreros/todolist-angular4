import { TodoService } from 'app/services/todo.service';
import { ToDo } from 'app/models/todo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'app/models/constants.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  private id: number;
  public item: ToDo;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toDoService: TodoService
  ) { }

  ngOnInit() {
    this.retrieveID();
  }

  retrieveID() {
    this.route.params.subscribe(
      (data) => {
        this.id = data['id'];
        this.verifyID();
      },
      (err) => console.log(err)
    );
  }

  verifyID(): void {
    if (isNaN(this.id)) {
      this.router.navigateByUrl(Constants.Routes.empty);
    }
    const todo: ToDo = this.toDoService.getTodo(Number(this.id));
    if (todo === undefined) {
      this.router.navigateByUrl(Constants.Routes.empty);
    }
    this.item = todo;
  }

  deleteItem(): void {
    const result = this.toDoService.delete(Number(this.id));
    if (result === true) {
      this.router.navigateByUrl(Constants.Routes.empty);
    }
  }

}
