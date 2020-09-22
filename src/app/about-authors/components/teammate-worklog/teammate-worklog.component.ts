import { Component, Input } from '@angular/core';
import { IWorklogItem } from '../../about-authors.models';

@Component({
  selector: 'app-teammate-worklog',
  templateUrl: './teammate-worklog.component.html',
  styleUrls: ['./teammate-worklog.component.scss'],
})
export class TeammateWorklogComponent {
  @Input() public worklog: IWorklogItem[];

  public displayedColumns: string[] = ['hours', 'description'];
}
