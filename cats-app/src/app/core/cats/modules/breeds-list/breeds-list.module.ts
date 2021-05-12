import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedsListComponent } from './breeds-list.component';



@NgModule({
  declarations: [
    BreedsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BreedsListComponent]
})
export class BreedsListModule { }
