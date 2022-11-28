import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VereadorPage } from './vereador.page';

const routes: Routes = [
  {
    path: '',
    component: VereadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VereadorPageRoutingModule {}
