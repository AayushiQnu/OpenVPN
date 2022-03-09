import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigFilePage } from './config-file.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigFilePageRoutingModule {}
