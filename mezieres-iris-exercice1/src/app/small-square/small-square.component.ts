import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-small-square',
  templateUrl: './small-square.component.html',
  styleUrls: ['./small-square.component.scss']
})
export class SmallSquareComponent implements OnInit {

  @Input() color: string = '';
  @Output() backgroundColor = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    this.backgroundColor.emit(this.color);
  }
}
