import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigFilePageRoutingModule } from './config-file-routing.module';

import { ConfigFilePage } from './config-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigFilePageRoutingModule
  ],
  declarations: [ConfigFilePage]
})
export class ConfigFilePageModule {}
