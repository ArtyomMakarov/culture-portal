import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { IAuthor } from '../core/models/authors-model';
import { langs } from '../core/models/langs.model';
import { AuthorsService } from '../core/services/authors.service';

interface Iphoto {
  photo: string;
}

@Component({
  selector: 'app-poets-list',
  templateUrl: './poets-list.component.html',
  styleUrls: ['./poets-list.component.scss'],
})
export class PoetsListComponent implements OnInit, OnDestroy{
  public authorsList: IAuthor[];
  public keyWord: string;
  public titleImgAuthor: string = './assets/img/poets-img/img2_orig.jpg';
  private subscription: Subscription;

  constructor (private authors: AuthorsService, public translate: TranslateService) {
    this.authorsList = this.authors.getAllPoetsByLang(langs.en);
  }

  ngOnInit(): void {
    this.subscription = this.translate.onLangChange.subscribe(
      (val) => {
        this.authorsList = this.authors.getAllPoetsByLang(val.lang);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public inputWords(query: string): void {
    query = query.trim();
    if (query) {
      this.keyWord = query;
    }
  }

  public selectAuthor(id: Iphoto): void {
    this.titleImgAuthor = id.photo;
  }

}
