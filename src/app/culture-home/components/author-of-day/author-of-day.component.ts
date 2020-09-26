import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { IAuthor } from 'src/app/core/models/authors-model';
import { langs } from 'src/app/core/models/langs.model';
import { AuthorsService } from 'src/app/core/services/authors.service';

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss'],
})
export class AuthorOfDayComponent implements OnInit, OnDestroy {
  public author: IAuthor;
  private sbc: Subscription;

  constructor(
    private authors: AuthorsService,
    public translate: TranslateService,
    private router: Router) { }

  goToAuthorPage(id: string) {
    this.router.navigate(['poets', id]);
  }

  ngOnInit(): void {
    let date: number = new Date().getDate() % this.authors.getLength();

    this.author = this.authors.getAllPoetsByLang(this.translate.currentLang as langs)
      .find((_, i) => i === date);

    this.sbc = this.translate.onLangChange.subscribe(
      (val) => {
        this.author = this.authors.getAllPoetsByLang(val.lang as langs)
          .find((_, i) => i === date);
      }
    )
  }

  ngOnDestroy(): void {
    this.sbc.unsubscribe();
  }
}
