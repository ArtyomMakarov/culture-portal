import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent {

  @Input() public workList: { date: string, work: string }[];

}
