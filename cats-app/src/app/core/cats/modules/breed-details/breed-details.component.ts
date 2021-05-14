import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreedDetails } from '../../models/breed-details';
import { CatsBreeds } from '../../models/cats-breeds';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.scss']
})
export class BreedDetailsComponent implements OnInit {

  @Input() breedDetails: BreedDetails;
  displayedColumns: string[] = ['name', 'origin', 'temperament', 'life_span', 'weight', 'wikipedia'];

  constructor() { }

  ngOnInit(): void {
  }

  dataSource(breedDetails: BreedDetails): MatTableDataSource<BreedDetails> {
    return new MatTableDataSource<BreedDetails>(new Array<BreedDetails>(breedDetails));
  }

}
