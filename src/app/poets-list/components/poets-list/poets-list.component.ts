import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { IAuthor } from '../../../core/models/authors-model';
import { langs } from '../../../core/models/langs.model';
import { AuthorsService } from '../../../core/services/authors.service';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
} from '@angular/animations';

interface Iphoto {
  photo: string;
}

@Component({
  selector: 'app-poets-list',
  templateUrl: './poets-list.component.html',
  styleUrls: ['./poets-list.component.scss'],
  animations: [
    trigger('show', [
      transition(':enter', [
        style({ transform: 'translate(30%) scale(1.4)', opacity: 0.5 }),
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class PoetsListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public authorsList: IAuthor[];
  public keyWord: string;
  public selected: string;
  public nameRoutePath: string;

  constructor(
    private authors: AuthorsService,
    public translate: TranslateService,
    public router: Router
  ) { }

  public inputWords(query: string): void {
    query = query.trim();
    if (query) {
      this.keyWord = query;
    }
  }

  public selectAuthor(id: string): void {
    this.selected = id;
  }

  public goToDetailedPage(name: string): void {
    this.nameRoutePath = name.slice(name.lastIndexOf(' '));
    this.router.navigate(['poets', this.nameRoutePath]);
  }

  public ngOnInit(): void {
    this.subscription = this.translate.onLangChange.subscribe((val) => {
      this.authorsList = this.authors.getAllPoetsByLang(val.lang);
    });

    this.authorsList = this.authors.getAllPoetsByLang(
      this.translate.currentLang as langs
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
