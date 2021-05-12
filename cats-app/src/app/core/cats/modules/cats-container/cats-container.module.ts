import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsContainerComponent } from './cats-container.component';
import { BreedsListModule } from '../breeds-list/breeds-list.module';



@NgModule({
  declarations: [
    CatsContainerComponent
  ],
  imports: [
    CommonModule,
    BreedsListModule
  ]
})
export class CatsContainerModule { }
