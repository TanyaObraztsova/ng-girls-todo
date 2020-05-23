import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Input() title = 'initial title';

  constructor() {}

  ngOnInit(): void {}

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
