import { Component, OnDestroy, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoetsListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public authorsList: IAuthor[];
  @Input() public keyWord: string;
  public selected: string;
  public nameRoutePath: string;

  constructor(
    private authors: AuthorsService,
    public translate: TranslateService,
    public router: Router
  ) {  }

  public selectAuthor(id: string): void {
    this.selected = id;
  }

  public goToDetailedPage(id: string): void {
    this.router.navigate(['poets', id]);
  }

  public ngOnInit(): void {
    this.subscription = this.translate.onLangChange.subscribe((value) => {
      this.authorsList = this.authors.getAllPoetsByLang(value.lang);
    });

    this.authorsList = this.authors.getAllPoetsByLang(
      this.translate.currentLang as langs
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
