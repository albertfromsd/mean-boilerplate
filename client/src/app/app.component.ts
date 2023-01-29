import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MEAN Boiler Plate';
  constructor( public userService: UserService ) {}

  ngOnInit(): void {
      this.userService.getAllUsers();
  }
}
//
//
