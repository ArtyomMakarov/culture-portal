import { Component, Input } from '@angular/core';

import { ITeammate } from '../../about-authors.models';

@Component({
  selector: 'app-teammate-card',
  templateUrl: './teammate-card.component.html',
  styleUrls: ['./teammate-card.component.scss'],
})
export class TeammateCardComponent {
  @Input() public teammate: ITeammate;
}
