import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedsListComponent } from './breeds-list.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    BreedsListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [BreedsListComponent]
})
export class BreedsListModule { }
