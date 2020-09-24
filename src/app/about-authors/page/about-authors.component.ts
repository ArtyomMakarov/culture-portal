import { Component } from '@angular/core';

import {
  ITeammate,
  ITeammateWorkLog,
  TEAMMATES,
  TEAMMATES_WORKLOGS,
} from '../about-authors.models';

@Component({
  selector: 'app-about-authors',
  templateUrl: './about-authors.component.html',
  styleUrls: ['./about-authors.component.scss'],
})
export class AboutAuthorsComponent {
  public teammates: ITeammate[] = TEAMMATES;
  public workLogs: ITeammateWorkLog[] = TEAMMATES_WORKLOGS;
}
