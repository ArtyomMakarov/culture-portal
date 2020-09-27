import { Injectable } from '@angular/core';

import { TEAMMATES_BY } from '../../../authors-data/by/byAuthors';
import { TEAMMATES_EN } from '../../../authors-data/en/enAuthors';
import { TEAMMATES_WORKLOGS } from '../../../authors-data/en/enWorklog';
import { TEAMMATES_RU } from '../../../authors-data/ru/ruAuthors';
import { langs } from '../../core/models/langs.model';
import { ITeammate, ITeammateWorkLog } from '../models/about-authors.models';

@Injectable({
  providedIn: 'root',
})
export class AboutAuthorsService {
  private byAuthors: ITeammate[] = TEAMMATES_BY;
  private ruAuthors: ITeammate[] = TEAMMATES_RU;
  private enAuthors: ITeammate[] = TEAMMATES_EN;
  private enWorklog: ITeammateWorkLog[] = TEAMMATES_WORKLOGS;
  private ruWorklog: ITeammateWorkLog[] = TEAMMATES_WORKLOGS;
  private byWorklog: ITeammateWorkLog[] = TEAMMATES_WORKLOGS;

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
