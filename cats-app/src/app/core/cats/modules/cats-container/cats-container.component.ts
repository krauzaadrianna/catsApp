import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CatsBreeds } from '@cats/models/cats-breeds';
import { CatsBreedsService } from '@cats/services/cats.service';
import { BreedDetails } from '../../models/breed-details';

@Component({
  selector: 'app-cats-container',
  templateUrl: './cats-container.component.html',
  styleUrls: ['./cats-container.component.scss']
})
export class CatsContainerComponent implements OnInit {

  catsBreeds$: Observable<CatsBreeds> = this.catsBreedsService.selectCatsBreeds();
  breedDetails$: Observable<BreedDetails>;
  switchView = 'seeList';

  constructor(private catsBreedsService: CatsBreedsService) { }

  ngOnInit(): void {
    this.catsBreedsService.getCatsBreeds();
  }

  viewBreedDetails(breedDetails: BreedDetails): void{
    this.breedDetails$ = of(breedDetails);
    this.switchView = 'seeDetails';
  }

}
