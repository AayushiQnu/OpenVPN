import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaManagementPage } from './ca-management.page';

const routes: Routes = [
  {
    path: '',
    component: CaManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaManagementPageRoutingModule {}
