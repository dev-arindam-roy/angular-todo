import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TodoModel } from '../app-todos.model';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {

  todoIndex: any = null;
  todos: TodoModel[];
  todoItems: string | null;
  theTodo: any;

  constructor(private route: ActivatedRoute) { 
    this.todoItems = localStorage.getItem("onexTodos"); 
    if (this.todoItems == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.todoItems);
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.todoIndex = params.get('id');
      this.theTodo = this.todos[this.todoIndex]
    })
  }

}
