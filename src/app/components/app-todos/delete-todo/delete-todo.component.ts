import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../app-todos.model';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {

  @Input() singleTodo: any = [];
  @Input() dataIndex: number = 0;
  @Output() deleteTodo: EventEmitter<TodoModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickDeleteTodo(singleTodo: TodoModel) {
    this.deleteTodo.emit(singleTodo);
  }

}
