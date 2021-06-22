import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TodoModel } from '../app-todos.model';

@Component({
  selector: 'app-status-todo',
  templateUrl: './status-todo.component.html',
  styleUrls: ['./status-todo.component.css']
})
export class StatusTodoComponent implements OnInit {

  @Input() singleTodo: any = [];
  @Input() dataIndex: number = 0;
  todoStatus: any = [];

  @Output() statusTodo: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.todoStatus = [
      {'id' : 0, 'status' : 'New'},
      {'id' : 1, 'status' : 'Completed'},
      {'id' : 2, 'status' : 'In-Progress'},
      {'id' : 3, 'status' : 'On-Hold'}
    ];
  }

  ngOnInit(): void {
  }

  onTodoStatusChange(event:any, singleTodo:TodoModel) {
    const emitData = {
      newStatus: event.target.value,
      forTodo: singleTodo
    }
    this.statusTodo.emit(emitData);
  }

}
