import { createReducer, on } from '@ngrx/store';
import * as CatsBreedsActions from '@cats/store/actions/cats.actions';
import { BreedDetails } from '@cats/models/breed-details';
import { CatsBreeds } from '../../models/cats-breeds';

export const featureName = 'catsBreeds';

export const catsBreedsInitialState: CatsBreeds = new Array<BreedDetails>();

export const catsBreedsReducer = createReducer(
  catsBreedsInitialState,
  on(CatsBreedsActions.getCatsBreedsSuccess, (state, payload) => payload.payload),
);
