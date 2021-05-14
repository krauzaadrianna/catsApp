import { AppState } from '@app/app-store.module';
import { createSelector } from '@ngrx/store';
import { CatsBreeds } from '@cats/models/cats-breeds';


export const selectCatsBreeds = createSelector(
    (state: AppState) => state.catsBreeds,
    (catsBreeds: CatsBreeds) => catsBreeds
);



