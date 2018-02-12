import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from 'app/components/todo-list/todo-list.component';
import { TodoDetailComponent } from 'app/components/todo-detail/todo-detail.component';
const routes: Routes = [
    {
        path: '', component: TodoListComponent
    },
    {
        path: 'list', pathMatch: 'full', component: TodoListComponent
    },
    {
        path: 'todo/:id', pathMatch: 'full', component: TodoDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
