import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';


  list = [
    {
      icon: 'fact_check',
      route: 'dashboard',
      text: 'Dashboard'
    },
    {
      icon: 'person',
      route: 'user',
      text: 'User'
    }
  ]
}
