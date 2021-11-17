import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mezieres-iris-exercice1';

  public color: string = '';

  public getBackgroundColor(color: string) {
    this.color = color;
  }
}
