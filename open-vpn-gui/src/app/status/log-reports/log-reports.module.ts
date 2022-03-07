import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { LogReportsPageRoutingModule } from './log-reports-routing.module';

import { LogReportsPage } from './log-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogReportsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [LogReportsPage]
})
export class LogReportsPageModule {}
