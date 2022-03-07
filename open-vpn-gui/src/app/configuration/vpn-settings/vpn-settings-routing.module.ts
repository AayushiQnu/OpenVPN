import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VpnSettingsPage } from './vpn-settings.page';

const routes: Routes = [
  {
    path: '',
    component: VpnSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VpnSettingsPageRoutingModule {}
