import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-info',
  templateUrl: './dev-info.component.html',
  styleUrls: ['./dev-info.component.css']
})
export class DevInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToTodo() {
    this.router.navigateByUrl('/');
  }

}
