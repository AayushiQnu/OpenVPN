import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { UserPermissionsPageRoutingModule } from './user-permissions-routing.module';

import { UserPermissionsPage } from './user-permissions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPermissionsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [UserPermissionsPage]
})
export class UserPermissionsPageModule {}
