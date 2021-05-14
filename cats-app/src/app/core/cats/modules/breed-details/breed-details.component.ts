import { Component, Input } from '@angular/core';
import { BreedDetails } from '../../models/breed-details';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.scss']
})
export class BreedDetailsComponent {

  @Input() breedDetails: BreedDetails;

  constructor() { }

}
