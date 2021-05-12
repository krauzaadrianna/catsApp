import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatsContainerComponent } from './modules/cats-container/cats-container.component';

const routes: Routes = [
  {
    path: '',
    component: CatsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatsRoutingModule {}