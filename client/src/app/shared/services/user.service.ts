import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserAction } from '../../store/user/user.action';
import { selectUserAll } from '../../store/user/user.selector';

import { RootAppService } from './root-app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private store: Store,
    private rootAppService: RootAppService
  ) { }

  private url: string = "http://localhost:3000/users";

  setAllUsers(): void {
    this.http.get(`${this.url}/all`).subscribe( (res: any) => {
      const allUsers: User[] = [];

      for( let i=0; i<res.length; i++ ) {
        const user: User = {
          _id: res[i]._id,
          username: res[i].username,
          firstname: res[i].firstname,
          lastname: res[i].lastname,
          email: res[i].email
        }
        allUsers.push(user);
      }
      this.store.dispatch(UserAction.setAllUsers({allUsers}));
    } )
  }

  getAllUsers(): Observable<User[]> {
    return this.store.select(selectUserAll);
  }

  createUser(user: User): void {
    this.http.post(`${this.url}/create`, user ).subscribe(
      (res: any) => {
        this.setAllUsers();
        this.rootAppService.setAppMessage(
          `User successfully created at ${new Date().toLocaleTimeString()}`
        );
      },
      (err: any) => {
        console.log('userService createUser error: ', err.error.message)
        this.rootAppService.setAppMessage(err.error.message);
      }
    )
  }

  deleteUser(_id: string): void {
    this.http.delete(`${this.url}/delete/${_id}`).subscribe(
      (res: any) => {
        this.setAllUsers();
        this.rootAppService.setAppMessage(
          `User successfully deleted at ${new Date().toLocaleTimeString()}`
        );
      },
      (err: any) => {
        this.rootAppService.setAppMessage(err.error.message);
      }
    )
  }
}
