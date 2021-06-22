import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoModel } from '../app-todos.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  
  todoTitle: string = "";
  todoDetails: string = "";

  @Output() addTodo: EventEmitter<TodoModel> = new EventEmitter();
  
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.todoTitle != '') {
      const createTodo = {
        title: this.todoTitle,
        details: this.todoDetails,
        status: 0,
        isActive: true
      }
      this.addTodo.emit(createTodo);
      this.todoTitle = '';
      this.todoDetails = '';
    }
  }

}
