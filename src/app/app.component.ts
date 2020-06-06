import { Component } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { slideInAnimation } from './shared/animations/route-animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'ToDo';

  constructor(public router: Router) {
    console.log(router.url)
  }


 

}
