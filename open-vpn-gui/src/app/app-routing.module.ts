import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vpn/status/status-overview',
    pathMatch: 'full'
  },
  {
    path: 'vpn/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'vpn/status/status-overview',
    loadChildren: () => import('./status/status-overview/status-overview.module').then( m => m.StatusOverviewPageModule)
  },
  {
    path: 'vpn/status/current-users',
    loadChildren: () => import('./status/current-users/current-users.module').then( m => m.CurrentUsersPageModule)
  },
  {
    path: 'vpn/status/log-reports',
    loadChildren: () => import('./status/log-reports/log-reports.module').then( m => m.LogReportsPageModule)
  },
  {
    path: 'vpn/configuration/activation',
    loadChildren: () => import('./configuration/activation/activation.module').then( m => m.ActivationPageModule)
  },
  {
    path: 'vpn/configuration/vpn-settings',
    loadChildren: () => import('./configuration/vpn-settings/vpn-settings.module').then( m => m.VpnSettingsPageModule)
  },
  {
    path: 'vpn/configuration/advanced-vpn-settings',
    loadChildren: () => import('./configuration/advanced-vpn-settings/advanced-vpn-settings.module').then( m => m.AdvancedVpnSettingsPageModule)
  },
  {
    path: 'vpn/configuration/web-server',
    loadChildren: () => import('./configuration/web-server/web-server.module').then( m => m.WebServerPageModule)
  },
  {
    path: 'vpn/configuration/ca-management',
    loadChildren: () => import('./configuration/ca-management/ca-management.module').then( m => m.CaManagementPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
