import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppTodosComponent } from './components/app-todos/app-todos.component';
import { DevInfoComponent } from './components/dev-info/dev-info.component';
import { ViewTodoComponent } from './components/app-todos/view-todo/view-todo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', 
    component: AppTodosComponent
  },
  {
    path: 'todo/:id', 
    component: ViewTodoComponent
  },
  {
    path: 'about', 
    component: DevInfoComponent
  },
  {
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
