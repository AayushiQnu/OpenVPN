import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebServerPageRoutingModule } from './web-server-routing.module';

import { WebServerPage } from './web-server.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebServerPageRoutingModule
  ],
  declarations: [WebServerPage]
})
export class WebServerPageModule {}
