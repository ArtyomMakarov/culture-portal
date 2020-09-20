import { Component } from '@angular/core';

import { ITeammate, TEAMMATES } from './about-authors.models';

@Component({
  selector: 'app-about-authors',
  templateUrl: './about-authors.component.html',
  styleUrls: ['./about-authors.component.scss'],
})
export class AboutAuthorsComponent {
  public teammates: ITeammate[] = TEAMMATES;
}
