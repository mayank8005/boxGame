import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { LABELS } from './controls.constants';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Output() addBoxClicked: EventEmitter<void> = new EventEmitter<void>();

  public LABELS = LABELS;

  constructor() { }

  ngOnInit(): void {
  }

  addBoxClickHandler(): void {
    this.addBoxClicked.emit();
  }

}
