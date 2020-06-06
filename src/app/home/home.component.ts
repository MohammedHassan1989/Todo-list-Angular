import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../shared/animations/route-animation';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../shared/http/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]

})
export class HomeComponent implements OnInit {
  showHeader = true;
  showMenu = true;
  username:string=''
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
this.username = this.auth.getuserName();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ToggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

}
