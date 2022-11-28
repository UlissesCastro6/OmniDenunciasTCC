import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VereadorPageRoutingModule } from './vereador-routing.module';

import { VereadorPage } from './vereador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VereadorPageRoutingModule
  ],
  declarations: [VereadorPage]
})
export class VereadorPageModule {}
