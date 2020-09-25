import { Component, OnInit } from '@angular/core';
import { poets } from '../../../../poets-data/ru/poets';

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss'],
})
export class AuthorOfDayComponent implements OnInit {
  date = new Date();
  i = this.date.getDay();
  model = poets;

  constructor() { }

  ngOnInit(): void { }
}
