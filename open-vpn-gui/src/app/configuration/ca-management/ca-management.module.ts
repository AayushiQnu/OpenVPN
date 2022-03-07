import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { CaManagementPageRoutingModule } from './ca-management-routing.module';

import { CaManagementPage } from './ca-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaManagementPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CaManagementPage]
})
export class CaManagementPageModule {}
