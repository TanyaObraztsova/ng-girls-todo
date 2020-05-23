import { Component, Input, OnInit } from '@angular/core';

export interface Item {
  title?: string
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Item = {};

  constructor() {}

  ngOnInit(): void {}
}
