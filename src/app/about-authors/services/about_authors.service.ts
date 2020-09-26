import { Injectable } from '@angular/core';
import { langs } from "../../core/models/langs.model";
import { TEAMMATES_EN } from '../../../authors-data/en/enAuthors';
import { TEAMMATES_RU } from '../../../authors-data/ru/ruAuthors';
import { TEAMMATES_BY } from '../../../authors-data/by/byAuthors';
import { TEAMMATES_WORKLOGS_EN } from '../../../authors-data/en/enWorklog';
import{ TEAMMATES_WORKLOGS_RU } from '../../../authors-data/ru/ruWorklog';
import { TEAMMATES_WORKLOGS_BY } from '../../../authors-data/by/byWorklog';
import {ITeammate, ITeammateWorkLog } from "../models/about-authors.models";

@Injectable({
  providedIn: 'root',
})
export class AboutAuthorsService {
  private byAuthors: ITeammate[] = TEAMMATES_BY;
  private ruAuthors: ITeammate[] = TEAMMATES_RU;
  private enAuthors: ITeammate[] = TEAMMATES_EN;
  private enWorklog: ITeammateWorkLog[] = TEAMMATES_WORKLOGS_EN;
  private ruWorklog: ITeammateWorkLog[] = TEAMMATES_WORKLOGS_RU;
  private byWorklog: ITeammateWorkLog[] = TEAMMATES_WORKLOGS_BY;


  public getAuthorsByLang(lang: langs): ITeammate[] {
    switch (lang) {
      case langs.by:
        return this.byAuthors;
      case langs.en:
        return this.enAuthors;
      case langs.ru:
        return this.ruAuthors;
      default:
        return this.enAuthors;
    }
  }

  public getWorklogByLang(lang: langs): ITeammateWorkLog[] {
    switch (lang) {
      case langs.by:
        return this.byWorklog;
      case langs.en:
        return this.enWorklog;
      case langs.ru:
        return this.ruWorklog;
      default:
        return this.enWorklog;
    }
  }

}
