import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { TodoModel } from '../app-todos.model';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  newCount: number = 0;
  inProgressCount: number = 0;
  onHoldCount: number = 0;
  completedCount: number = 0;

  //@Input() allTodosDataObj: any = {};
  _allTodosDataObj: any = {};
  @Input() set allTodosDataObj(value: any) {
    this._allTodosDataObj = value;
    
    this.newCount = 0;
    this.completedCount = 0;
    this.inProgressCount = 0;
    this.onHoldCount = 0;

    Object.keys(this._allTodosDataObj).forEach(key => {
      if (this._allTodosDataObj[key].status == 0) {
        this.newCount++;
      }
      if (this._allTodosDataObj[key].status == 1) {
        this.completedCount++;
      }
      if (this._allTodosDataObj[key].status == 2) {
        this.inProgressCount++;
      }
      if (this._allTodosDataObj[key].status == 3) {
        this.onHoldCount++;
      }
    });
  }
  get allTodosDataObj() {
    return this._allTodosDataObj
  }

  @Output() deleteTodo: EventEmitter<TodoModel> = new EventEmitter();
  @Output() statusTodo: EventEmitter<any> = new EventEmitter();
  @Output() deleteTodos: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  todoDelete(deleteTodoParam:TodoModel) {
    this.deleteTodo.emit(deleteTodoParam);
  }

  todoStatus(statusTodoParam:any) {
    this.statusTodo.emit(statusTodoParam);
  }

  todoDetails(todoNo: number) {
    this.router.navigate(['/todo', todoNo]);
  }

  deleteAllTodos() {
    this.deleteTodos.emit();
  }
}
