import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Box } from './main-container.type';
import { BOX_SPEED, UP, DOWN, LEFT, RIGHT, DELETE } from './main-container.constants';
import { PLAY_AREA_HEIGHT} from '../play-area/play-area.constants';
import { BOX_DIMENSION } from '../box/box.constants';


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  public boxes: Box[] = [];
  public innerWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent): void {
    const {key} = event;
    if (UP.includes(key)) { this.moveUp(); }
    else if (DOWN.includes(key)) { this.moveDown(); }
    else if (LEFT.includes(key)) { this.moveLeft(); }
    else if (RIGHT.includes(key)) { this.moveRight(); }
    else if (DELETE.includes(key)) { this.removeSelectedBox(); }
  }

  addBox(): void {
    this.removeSelection();
    const box: Box = {id: this.boxes.length + 1, x: 0, y: 0, selected: false};
    this.boxes = [...this.boxes, box];
  }

  boxClicked(id: number): void {
    this.removeSelection();
    this.boxes = this.boxes.map(box => ({
      ...box,
      selected: box.id === id,
    }));
  }

  removeSelectedBox(): void {
    this.boxes = this.boxes.filter(box => !box.selected);
  }

  moveDown(): void {
    this.boxes = this.boxes.map(box => ({
      ...box,
      y: box.selected ? this.checkAndGetNewCords(box.y + BOX_SPEED, PLAY_AREA_HEIGHT) : box.y,
    }));
  }

  moveUp(): void {
    this.boxes = this.boxes.map(box => ({
      ...box,
      y: box.selected ? this.checkAndGetNewCords(box.y - BOX_SPEED, PLAY_AREA_HEIGHT) : box.y,
    }));
  }

  moveLeft(): void {
    if (!innerWidth) { return; }
    this.boxes = this.boxes.map(box => ({
      ...box,
      x: box.selected ? this.checkAndGetNewCords(box.x - BOX_SPEED, this.innerWidth) : box.x,
    }));
  }

  moveRight(): void {
    if (!innerWidth) { return; }
    this.boxes = this.boxes.map(box => ({
      ...box,
      x: box.selected ? this.checkAndGetNewCords(box.x + BOX_SPEED, this.innerWidth) : box.x,
    }));
  }

  checkAndGetNewCords(cord: number, range: number): number {
    const cordWithDimension = cord + BOX_DIMENSION;
    if (cord < 0) { return 0; }
    if (cordWithDimension > range) { return range - BOX_DIMENSION; }
    return cord;
  }

  removeSelection(): void {
    this.boxes = this.boxes.map(box => ({...box, selected: false}));
  }

}
