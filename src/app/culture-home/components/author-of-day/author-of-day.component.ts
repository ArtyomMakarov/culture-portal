import { Component, OnInit } from '@angular/core';
import { poets } from '../../../../poets-data/poets';

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss'],
})
export class AuthorOfDayComponent implements OnInit {
  i = Math.round(Math.random() * 6);
  model = poets;

  constructor() {}

  ngOnInit(): void {}
}
