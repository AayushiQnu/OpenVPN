import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedVpnSettingsPageRoutingModule } from './advanced-vpn-settings-routing.module';

import { AdvancedVpnSettingsPage } from './advanced-vpn-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedVpnSettingsPageRoutingModule
  ],
  declarations: [AdvancedVpnSettingsPage]
})
export class AdvancedVpnSettingsPageModule {}
