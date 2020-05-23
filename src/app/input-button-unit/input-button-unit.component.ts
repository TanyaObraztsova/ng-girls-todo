import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Input() title = 'initial title';
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
