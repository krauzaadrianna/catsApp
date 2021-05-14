import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as CatsReducers from '@cats/store/reducers/cats.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(CatsReducers.featureName, CatsReducers.catsBreedsReducer)
  ],
})
export class CatsStoreModule {}
