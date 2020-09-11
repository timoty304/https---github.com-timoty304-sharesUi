import { Component, ViewChild } from '@angular/core';
import {WelcomeComponent} from './components/welcome/welcome.component';

@Component({
  selector: 'app-root',
  template: `<app-default></app-default>
    
  <router-outlet></router-outlet>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shares';

  
}
