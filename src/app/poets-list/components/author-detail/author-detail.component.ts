import { Component, OnInit } from '@angular/core';
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
  public id: string;
  public author: IAuthor;
  private subscriptions: Subscription[] = [];
  public gallery: Array<object> =[];
  public isVisible: boolean = false;

  set subscription(sb: Subscription) { this.subscriptions.push(sb) };

  constructor(
    private authors: AuthorsService,
    private route: ActivatedRoute,
    public translate: TranslateService
  ) { }

  public ngOnInit(): void {
    this.subscription = this.route.params.subscribe( params => {
      this.id = params.id;
    });

    this.subscription = this.translate.onLangChange.subscribe((value) => {
      this.author = this.authors.getAllPoetsByLang(value.lang as langs).find((poet) => poet.id === this.id);
    });

    this.author = this.authors.getAllPoetsByLang(
      this.translate.currentLang as langs
    ).find((poet) => poet.id === this.id);

    this.author.galery.forEach( photo => {
      let photoObg = {
        image: photo.photo,
        thumbImage: photo.photo,
        alt: 'alt of img',
        title: `${this.author.name}`
      };
      this.gallery.push(photoObg);
    });
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe())
  }

  public showVideo(): void {
    this.isVisible = true;
  }

  public overlayClicked() {
    this.isVisible = false;
  }
}
