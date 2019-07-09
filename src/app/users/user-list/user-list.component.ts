import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../@models/user.model';

@Component({
  selector: 'sc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getAllUsers()
      .subscribe((data: User[]) => (this.users = data));
  }
}
