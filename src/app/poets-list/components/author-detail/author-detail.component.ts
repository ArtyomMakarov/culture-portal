import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IAuthor } from '../../../core/models/authors-model';
import { langs } from '../../../core/models/langs.model';
import { AuthorsService } from '../../../core/services/authors.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
  public id: number = 2;
  public author: IAuthor;
  public idSubscription: Subscription;
  public langSubscription: Subscription;

  constructor(
    private authors: AuthorsService,
    private route: ActivatedRoute,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    // this.idSubscription = this.route.params.subscribe( params => {
    //   this.id = params.id;
    // });
    this.id = this.id;
    console.log(this.id);
    this.langSubscription = this.translate.onLangChange.subscribe((value) => {
      this.author = this.authors.getPoetsByIdLang(this.id, value.lang);
    });
    this.author = this.authors.getPoetsByIdLang(this.id,
      this.translate.currentLang as langs
    );
  }

  public ngOnDestroy(): void {
    this.idSubscription.unsubscribe();
    this.langSubscription.unsubscribe();
  }

}
