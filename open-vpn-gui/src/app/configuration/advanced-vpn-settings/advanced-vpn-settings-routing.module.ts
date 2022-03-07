import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedVpnSettingsPage } from './advanced-vpn-settings.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedVpnSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedVpnSettingsPageRoutingModule {}
