import { Pipe, PipeTransform } from '@angular/core';

import { IAuthor } from '../../core/models/authors-model';

@Pipe({
  name: 'searchWord'
})
export class SearchWordPipe implements PipeTransform {

  transform(allAuthors: IAuthor[], words: string): unknown {
    if (!allAuthors || !words) {
      return allAuthors;
    }
    return allAuthors.filter((element) => element.name.toLowerCase().includes(words.toLowerCase()));
  }

}
