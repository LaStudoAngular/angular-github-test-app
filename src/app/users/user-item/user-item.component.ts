import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sc-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})

export class UserItemComponent implements OnInit {
  user;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // GET USERNAME FROM URL
    this.route.params.subscribe(data => {
      const username = data['user'];

      // GET USER INFO FROM GITHUB
      this.userService.getSingleUser(username)
        .subscribe(user => this.user = user)
    })
  }

}
