import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusOverviewPage } from './status-overview.page';

const routes: Routes = [
  {
    path: '',
    component: StatusOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusOverviewPageRoutingModule {}
