import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VpnSettingsPageRoutingModule } from './vpn-settings-routing.module';

import { VpnSettingsPage } from './vpn-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VpnSettingsPageRoutingModule
  ],
  declarations: [VpnSettingsPage]
})
export class VpnSettingsPageModule {}
