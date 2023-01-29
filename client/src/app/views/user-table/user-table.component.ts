import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserAll } from '../../store/user/user.selector';

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/User.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit{
  userList: User[] = [];
  constructor( private store: Store, public userService: UserService ) {

  }

  ngOnInit(): void {
    this.store.select(selectUserAll).subscribe( (res:any) => {
      this.userList = res;
    } );

  }
}
