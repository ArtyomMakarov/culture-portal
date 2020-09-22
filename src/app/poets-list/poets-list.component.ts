import { Component } from '@angular/core';

import { IAuthor } from '../core/models/authors-model';
import { AuthorsService } from '../core/services/authors.service';

@Component({
  selector: 'app-poets-list',
  templateUrl: './poets-list.component.html',
  styleUrls: ['./poets-list.component.scss'],
})
export class PoetsListComponent {
  public authorsList: IAuthor[];
  public keyWord: string;
  public titleImgAuthor: string = './assets/img/poets-img/img1_orig.jpg';

  constructor (private authors: AuthorsService) {
    this.authorsList = this.authors.getAllPoets();
  }

  public inputWords(query: string): void {
    query = query.trim();
    if (query) {
      this.keyWord = query;
    }
  }
  public selectAuthor(): void {

  }

}
