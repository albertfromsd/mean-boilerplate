import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/User.interface';
import { RootAppService } from '../../shared/services/root-app.service';

@Component({
  selector: 'app-user-app',
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.scss']
})
export class UserAppComponent implements OnInit{
  constructor(
    private userService: UserService,
    private rootAppService: RootAppService
  ) { }

  title: string = 'Users App'
  userList: User[] = [];

  ngOnInit(): void {
    this.rootAppService.setCurrentAppTitle(this.title);

    this.userService.getAllUsers().subscribe( (res: User[]) => {
      this.userList = res;
    } );
  }
}
