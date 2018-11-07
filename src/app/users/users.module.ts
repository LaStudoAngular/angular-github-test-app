import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

// COMPONENTS
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [UserListComponent, UserItemComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {}
