import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsRoutingModule } from './cats.routing.module';
import { BreedsListModule } from './modules/breeds-list/breeds-list.module';
import { BreedDetailsModule } from './modules/breed-details/breed-details.module';
import { CatsContainerModule } from './modules/cats-container/cats-container.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    BreedsListModule,
    BreedDetailsModule,
    CatsContainerModule
  ]
})
export class CatsModule { }
