import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentUsersPage } from './current-users.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentUsersPageRoutingModule {}
