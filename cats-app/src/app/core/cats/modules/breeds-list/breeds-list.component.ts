import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreedDetails } from '../../models/breed-details';
import { CatsBreeds } from '../../models/cats-breeds';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss'],
  animations: ['appearance']
})
export class BreedsListComponent {

  @Input() catsBreedsList: CatsBreeds;
  @Output() viewBreedDetails: EventEmitter<BreedDetails> = new EventEmitter<BreedDetails>();

  displayedColumns: string[] = ['name', 'origin'];
  constructor() { }

  breedDetailsClick(breedDetails: BreedDetails): void{
    this.viewBreedDetails.emit(breedDetails);
  }

  dataSource(catsBreeds: CatsBreeds): MatTableDataSource<BreedDetails> {
    return new MatTableDataSource<BreedDetails>(catsBreeds);
  }
}
