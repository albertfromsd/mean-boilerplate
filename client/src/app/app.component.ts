import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { RootAppService } from './shared/services/root-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rootTitle: string = 'MEAN Boiler Plate';
  message: string = '';

  constructor(
    private userService: UserService,
    private rootAppService: RootAppService
  ) {}

  ngOnInit(): void {
      this.userService.setAllUsers();

      this.rootAppService.getAppMessage().subscribe( (res: string) => {
        this.message = res;
      } )
  }
}
