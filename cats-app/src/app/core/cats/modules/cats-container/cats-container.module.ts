import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsContainerComponent } from './cats-container.component';
import { BreedsListModule } from '@cats/modules/breeds-list/breeds-list.module';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BreedDetailsModule } from '../breed-details/breed-details.module';

@NgModule({
  declarations: [
    CatsContainerComponent
  ],
  imports: [
    CommonModule,
    BreedsListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BreedDetailsModule
  ]
})
export class CatsContainerModule { }
