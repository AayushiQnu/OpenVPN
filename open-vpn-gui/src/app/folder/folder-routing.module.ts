import { WebServerPage } from './../configuration/web-server/web-server.page';
import { VpnSettingsPage } from './../configuration/vpn-settings/vpn-settings.page';
import { CaManagementPage } from './../configuration/ca-management/ca-management.page';
import { AdvancedVpnSettingsPage } from './../configuration/advanced-vpn-settings/advanced-vpn-settings.page';
import { ActivationPage } from './../configuration/activation/activation.page';
import { LogReportsPage } from './../status/log-reports/log-reports.page';
import { CurrentUsersPage } from './../status/current-users/current-users.page';
import { StatusOverviewPage } from './../status/status-overview/status-overview.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: StatusOverviewPage
  },
  {
    path: 'vpn/status/status-overview',
    component: StatusOverviewPage
  },
  {
    path: 'vpn/status/current-users',
    component: CurrentUsersPage
  },
  {
    path: 'vpn/status/log-reports',
    component: LogReportsPage
  },
  {
    path: 'vpn/configuration/activation',
    component: ActivationPage
  },
  {
    path: 'vpn/configuration/advanced-vpn-settings',
    component: AdvancedVpnSettingsPage
  },
  {
    path: 'vpn/configuration/ca-management',
    component: CaManagementPage
  },
  {
    path: 'vpn/configuration/vpn-settings',
    component: VpnSettingsPage
  },
  {
    path: 'vpn/configuration/web-server',
    component: WebServerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
