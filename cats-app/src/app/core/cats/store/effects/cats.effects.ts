import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { api } from 'src/environments/environment';
import { BreedDetails } from '@cats/models/breed-details';
import { CatsBreeds } from '@cats/models/cats-breeds';
import * as CatsBreedsActions from '@cats/store/actions/cats.actions';

@Injectable()
export class CatsBreedsEffects{

    private url = api.url;
    constructor(private actions: Actions, private http: HttpClient){}

    getCatsBreeds$ = createEffect(() =>
        this.actions.pipe(
        ofType(CatsBreedsActions.getCatsBreeds),
        switchMap(x => this.http.get<CatsBreeds>(this.url).pipe(
            map((catsBreeds: CatsBreeds) => {
                const catsArray = Array<BreedDetails>();
                for (const entry of catsBreeds) {
                    catsArray.push({
                        name: entry.name,
                        id: entry.id,
                        origin: entry.origin,
                        temperament: entry.temperament,
                        life_span: entry.life_span,
                        weight: {metric : entry.weight.metric},
                        wikipedia_url: entry.wikipedia_url,
                    } as BreedDetails);
                }
                return catsArray;
            }),
            map((payload: CatsBreeds) => CatsBreedsActions.getCatsBreedsSuccess({payload}))
        )))
    );
}
