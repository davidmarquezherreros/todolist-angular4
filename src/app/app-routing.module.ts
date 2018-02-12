import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from 'app/components/todo-list/todo-list.component';
const routes: Routes = [
    {
        path: '', component: TodoListComponent
    },
    {
        path: 'list', pathMatch: 'full', component: TodoListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
