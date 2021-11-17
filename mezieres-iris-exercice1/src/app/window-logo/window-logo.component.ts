import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-window-logo',
  templateUrl: './window-logo.component.html',
  styleUrls: ['./window-logo.component.scss']
})
export class WindowLogoComponent implements OnInit {

  @Output() backgroundColor = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public getBackgroundColor(color: string) {
    this.backgroundColor.emit(color);
  }

}
