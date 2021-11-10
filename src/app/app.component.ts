import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vilroutes: any[] = [
    {
      path: '',
      menuName: 'Home',
    },
    {
      path: 'card',
      menuName: 'Cards',
    },
    {
      path: 'ticket',
      menuName: 'Ticket',
    },
  ];
  name = 'Angular ' + VERSION.major;
  constructor() {}
}
