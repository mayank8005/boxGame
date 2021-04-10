import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Box } from '../main-container/main-container.type';
import { PLAY_AREA_HEIGHT } from './play-area.constants';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.css']
})
export class PlayAreaComponent implements OnInit {

  @Input('boxes') public boxes: Box[];
  @Output('boxClicked') boxClicked: EventEmitter<number> = new EventEmitter<number>();

  public playAreaHeight = PLAY_AREA_HEIGHT;

  constructor() { }

  ngOnInit(): void {
  }

  boxClickHandler(event: number): void {
    this.boxClicked.emit(event);
  }

}
