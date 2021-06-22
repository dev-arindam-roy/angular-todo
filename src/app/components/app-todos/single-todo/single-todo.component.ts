import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {

  @Input() singleTodo: any = [];
  @Input() dataIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
