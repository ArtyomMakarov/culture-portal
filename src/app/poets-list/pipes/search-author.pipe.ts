import { Pipe, PipeTransform } from '@angular/core';

import { IAuthor } from '../../core/models/authors-model';

@Pipe({
  name: 'searchAuthor'
})
export class SearchAuthorPipe implements PipeTransform {

  transform(allAuthors: IAuthor[], words: string): IAuthor[] {
    if (!words) {
      return allAuthors;
    }
    return allAuthors.filter((element) => element.name.toLowerCase().includes(words.toLowerCase()));
  }

}
