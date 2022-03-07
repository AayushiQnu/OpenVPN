import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusOverviewPageRoutingModule } from './status-overview-routing.module';

import { StatusOverviewPage } from './status-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusOverviewPageRoutingModule
  ],
  declarations: [StatusOverviewPage]
})
export class StatusOverviewPageModule {}
