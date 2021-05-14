import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsRoutingModule } from '@cats/cats.routing.module';
import { BreedsListModule } from '@cats/modules/breeds-list/breeds-list.module';
import { BreedDetailsModule } from '@cats/modules/breed-details/breed-details.module';
import { CatsContainerModule } from '@cats/modules/cats-container/cats-container.module';
import { CatsStoreModule } from '@cats/store/cats.store.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    BreedsListModule,
    BreedDetailsModule,
    CatsContainerModule,
    CatsStoreModule
  ],

})
export class CatsModule { }
