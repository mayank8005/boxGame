import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Box } from '../main-container/main-container.type';
import { BOX_DIMENSION } from './box.constants';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() boxData: Box;
  @Output() boxClicked: EventEmitter<number> = new EventEmitter<number>();

  public boxDimensions = BOX_DIMENSION;

  constructor() { }

  ngOnInit(): void {
  }

  boxClickHandler(): void {
    this.boxClicked.emit(this.boxData.id);
  }

}
