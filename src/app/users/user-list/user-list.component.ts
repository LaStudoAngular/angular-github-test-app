import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'sc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor( private userService: UserService ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => console.log(data))
  }

}
