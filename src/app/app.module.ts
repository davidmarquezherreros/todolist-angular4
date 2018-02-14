import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from 'app/services/todo.service';
import { StatusPipe } from './pipes/status.pipe';
import { AppRoutingModule } from 'app/app-routing.module';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoUpdateComponent } from './components/todo-update/todo-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    TodoListComponent,
    StatusPipe,
    TodoDetailComponent,
    TodoUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
