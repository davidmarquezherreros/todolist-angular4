import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms/src/model';
import { TodoService } from 'app/services/todo.service';
import { ToDo } from 'app/models/todo.model';
import { Validators } from '@angular/forms/src/validators';
import { Constants } from 'app/models/constants.model';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  public updateForm: FormGroup;
  private toDo: ToDo;
  private id: string;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.retrieveID();
    this.validateData();
    this.initiliazeForm();
  }

  initiliazeForm(): void {
    this.updateForm = new FormGroup({
      name: new FormControl(this.toDo.name, Validators.required),
      startDate: new FormControl( this.formatDate(this.toDo.startDate), [Validators.required]),
      endDate: new FormControl(this.formatDate(this.toDo.endDate), [])
    });
  }

  formatDate(date: Date): string {
    return (date !== undefined) ? (date.getDay() + '/' + date.getMonth() + 1 + '/' + date.getFullYear()) : '';
  }

  retrieveID() {
    this.route.params.subscribe(
      (data) => {
        this.id = data['id'];
      },
      (err) => console.log(err)
    );
  }

  isValidId(value: any): boolean {
    return isNaN(value) ? false : true;
  }

  RetrieveToDo(): void {
    this.toDo = this.todoService.getTodo(Number(this.id));
  }

  validateData(): void {
    if (this.isValidId(this.id) === true) {
      this.RetrieveToDo();
      if (this.toDo === undefined) {
        this.router.navigateByUrl('');
      }
    }
  }
  onSubmit(): void {
    this.todoService.updateToDo(this.toDo);
  }
}
