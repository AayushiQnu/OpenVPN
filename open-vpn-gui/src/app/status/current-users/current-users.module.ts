import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { CurrentUsersPageRoutingModule } from './current-users-routing.module';

import { CurrentUsersPage } from './current-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentUsersPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CurrentUsersPage]
})
export class CurrentUsersPageModule {}
