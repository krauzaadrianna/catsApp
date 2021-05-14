import { createAction, props } from '@ngrx/store';
import { CatsBreeds } from '@cats/models/cats-breeds';

const CATS_BREEDS_ACTION_TYPES = {
  GET_CATS_BREEDS: '[Cats breeds] Get cats breeds',
  GET_CATS_BREEDS_SUCCESS: '[Cats breeds] Get cats breeds success',
};

export const getCatsBreeds = createAction(CATS_BREEDS_ACTION_TYPES.GET_CATS_BREEDS);

export const getCatsBreedsSuccess = createAction(
  CATS_BREEDS_ACTION_TYPES.GET_CATS_BREEDS_SUCCESS,
  props<{ payload: CatsBreeds }>()
);

