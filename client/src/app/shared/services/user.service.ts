import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserAction } from '../../store/user/user.action';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient, private store: Store ) { }
  private url: string = "http://localhost:3000/users/all";

  getAllUsers(): void {
    this.http.get(`${this.url}`).subscribe( (res: any) => {
      const allUsers: User[] = [];

      for( let i=0; i<res.length; i++ ) {
        const user: User = {
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
}
