import { Pipe, PipeTransform } from '@angular/core';

import { IAuthor } from '../../core/models/authors-model';

@Pipe({
  name: 'searchAuthor'
})
export class SearchAuthorPipe implements PipeTransform {

  transform(allAuthors: IAuthor[], words: string): unknown {
    if (!allAuthors || !words) {
      return allAuthors;
    }
    console.log(allAuthors, '-', words);
    return allAuthors.filter((element) => element.name.toLowerCase().includes(words.toLowerCase()));
  }

}
