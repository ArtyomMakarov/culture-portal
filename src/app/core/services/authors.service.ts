import { Injectable } from '@angular/core';
import { IAuthor } from '../models/authors-model';
import enPoets from '../../../poets-data/en/index.en';
import ruPoets from '../../../poets-data/ru/index.ru';
import byPoets from '../../../poets-data/by/index.by';
import { langs } from '../models/langs.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private byPoets: IAuthor[] = byPoets;
  private ruPoets: IAuthor[] = ruPoets;
  private enPoets: IAuthor[] = enPoets;

  getAllPoetsByLang(lang: langs): IAuthor[] {
    switch (lang) {
      case langs.by:
        return this.byPoets;
      case langs.en:
        return this.enPoets;
      case langs.ru:
        return this.ruPoets;
      default:
        return this.enPoets;
    }
  }
}
