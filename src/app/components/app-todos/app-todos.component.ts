import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { ToastrService } from 'ngx-toastr';
import { TodoModel } from './app-todos.model';

@Component({
  selector: 'app-app-todos',
  templateUrl: './app-todos.component.html',
  styleUrls: ['./app-todos.component.css']
})
export class AppTodosComponent implements OnInit {

  todos: TodoModel[];
  todoItems: string | null;

  constructor(private toastr: ToastrService) { 
    this.todoItems = localStorage.getItem("onexTodos"); 
    if (this.todoItems == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.todoItems);
    }
  }

  ngOnInit(): void {
  }

  createTodo(todoParam:TodoModel) {
    this.todos.push(todoParam); 
    localStorage.setItem("onexTodos", JSON.stringify(this.todos));
    this.toastr.success('Todo has been created successfully, thankyou.', 'Todo Created!');
    this.reloadTodoList();
  }

  todoDelete(deleteTodoParam:TodoModel) {
    const index = this.todos.indexOf(deleteTodoParam);
    this.todos.splice(index, 1);
    localStorage.setItem("onexTodos", JSON.stringify(this.todos));
    this.toastr.success('Todo has been deleted successfully, thankyou.', 'Todo Deleted!');
    this.reloadTodoList();
  }

  todoStatus(statusTodoParam:any) {
    const index = this.todos.indexOf(statusTodoParam.forTodo);
    this.todos[index].status = statusTodoParam.newStatus;
    localStorage.setItem("onexTodos", JSON.stringify(this.todos));
    this.toastr.success('Todo status has been changed successfully, thankyou.', 'Status Changed!');
    this.reloadTodoList();
  }

  deleteTodoList() {
    localStorage.removeItem("onexTodos");
    this.todos = [];
  }

  reloadTodoList() {
    this.todoItems = localStorage.getItem("onexTodos"); 
    if (this.todoItems != null) {
      this.todos = JSON.parse(this.todoItems);
    }
  }
}
