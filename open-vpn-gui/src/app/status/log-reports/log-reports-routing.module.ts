import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogReportsPage } from './log-reports.page';

const routes: Routes = [
  {
    path: '',
    component: LogReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogReportsPageRoutingModule {}
