import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CatsBreedsEffects } from '@cats/store/effects/cats.effects';
import { CatsBreeds } from '@app/core/cats/models/cats-breeds';

export interface AppState {
    catsBreeds: CatsBreeds;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([CatsBreedsEffects]),
    StoreDevtoolsModule.instrument(),
  ],
})
export class AppStoreModule { }
