import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTodosComponent } from './components/app-todos/app-todos.component';
import { CreateTodoComponent } from './components/app-todos/create-todo/create-todo.component';
import { ListTodoComponent } from './components/app-todos/list-todo/list-todo.component';
import { ViewTodoComponent } from './components/app-todos/view-todo/view-todo.component';
import { SingleTodoComponent } from './components/app-todos/single-todo/single-todo.component';
import { StatusTodoComponent } from './components/app-todos/status-todo/status-todo.component';
import { DeleteTodoComponent } from './components/app-todos/delete-todo/delete-todo.component';
import { DevInfoComponent } from './components/dev-info/dev-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AppTodosComponent,
    CreateTodoComponent,
    ListTodoComponent,
    ViewTodoComponent,
    SingleTodoComponent,
    StatusTodoComponent,
    DeleteTodoComponent,
    DevInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      progressBar: true,
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
