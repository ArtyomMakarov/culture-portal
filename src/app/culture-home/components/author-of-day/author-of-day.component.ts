import { Component, OnInit } from '@angular/core';
import ruPoets from '../../../../poets-data/ru/index.ru';
import byPoets from '../../../../poets-data/ru/index.ru';
import enPoets from '../../../../poets-data/ru/index.ru';

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss'],
})
export class AuthorOfDayComponent implements OnInit {
  date = new Date();
  i = this.date.getDay();
  model = ruPoets;

  constructor() {}

  ngOnInit(): void {}
}
