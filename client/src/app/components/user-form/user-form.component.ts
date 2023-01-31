import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/User.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit{
  constructor(
    private userService: UserService ,
    private fb: FormBuilder
  ) {}

  userForm: FormGroup = this.fb.nonNullable.group({
    username: ['a', Validators.required],
    firstname: ['a', Validators.required],
    lastname: ['a', Validators.required],
    email: ['a', Validators.required]
  });

  ngOnInit(): void {

  }

  submit(): void {
    if( this.userForm.valid ) {
      const formData: User = this.userForm.getRawValue();
      this.userService.createUser(formData)
    }
  }

  clear(): void {
    this.userForm = this.fb.nonNullable.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

}
