import { Component, Input } from '@angular/core';
import {IAuthor } from "../../../core/models/authors-model";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input('author') public author: IAuthor;
  public side: string = 'right';

  constructor() { }

}
