import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {ITeammate, ITeammateWorkLog} from '../models/about-authors.models';
import { AboutAuthorsService } from "../services/about_authors.service";
import {TranslateService} from "@ngx-translate/core";
import {langs} from "../../core/models/langs.model";

@Component({
  selector: 'app-about-authors',
  templateUrl: './about-authors.component.html',
  styleUrls: ['./about-authors.component.scss'],
})
export class AboutAuthorsComponent implements OnInit, OnDestroy{
  private subscription: Subscription;
  public teammates: ITeammate[];
  public workLogs: ITeammateWorkLog[];

  constructor(
    private about_authors: AboutAuthorsService,
    public translate: TranslateService,
  ) { }

  public ngOnInit(): void {
    this.subscription = this.translate.onLangChange.subscribe((value) => {
      this.teammates = this.about_authors.getAuthorsByLang(value.lang);
      this.workLogs = this.about_authors.getWorklogByLang(value.lang);
    });

    this.teammates = this.about_authors.getAuthorsByLang(
      this.translate.currentLang as langs
    );

    this.workLogs = this.about_authors.getWorklogByLang(
      this.translate.currentLang as langs
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
