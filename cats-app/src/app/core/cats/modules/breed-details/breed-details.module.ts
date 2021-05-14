import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedDetailsComponent } from './breed-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    BreedDetailsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatListModule
  ],
  exports: [BreedDetailsComponent]
})
export class BreedDetailsModule { }
