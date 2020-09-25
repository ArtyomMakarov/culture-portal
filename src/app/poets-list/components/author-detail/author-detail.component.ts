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
  public id: string;
  public author: IAuthor;
  private subscriptions: Subscription[] = [];
  public gallery: Array<object> =[];

  set subscription(sb: Subscription) { this.subscriptions.push(sb) };

  constructor(
    private authors: AuthorsService,
    private route: ActivatedRoute,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe( params => {
      this.id = params.id;
    });


    // default language is english until id is added || then you can change for this (poets.id === id)
    this.subscription = this.translate.onLangChange.subscribe((value) => {
      this.author = this.authors.getAllPoetsByLang('en' as langs).find((poet) => poet.name.includes(this.id));
    });

    // same as above (poets.id === id)
    this.author = this.authors.getAllPoetsByLang(
      'en' as langs
    ).find((poet) => poet.name.includes(this.id));

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

}
