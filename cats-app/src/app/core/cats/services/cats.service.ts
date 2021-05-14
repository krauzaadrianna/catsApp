import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CatsBreeds } from '@cats/models/cats-breeds';
import * as CatsSelectors from '@cats/store/selectors/cats.selector';
import * as CatsActions from '@cats/store/actions/cats.actions';
import { AppState } from '@app/app-store.module';

@Injectable({
  providedIn: 'root',
})

export class CatsBreedsService {

    constructor(private store: Store<AppState>){}

    selectCatsBreeds(): Observable<CatsBreeds>  {
        return this.store.pipe(
            select(CatsSelectors.selectCatsBreeds)
        );
    }

    getCatsBreeds(): void {
        this.store.dispatch(CatsActions.getCatsBreeds());
    }



}
