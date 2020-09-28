import { Pipe, PipeTransform } from '@angular/core';

import { IAuthor } from '../../core/models/authors-model';

@Pipe({
  name: 'searchAuthor'
})
export class SearchAuthorPipe implements PipeTransform {

  transform(allAuthors: IAuthor[], keyWords: string = ''): IAuthor[] {
    if (!keyWords || !allAuthors) {
      return allAuthors;
    }
    const lowerKeyWords: string = keyWords.toLowerCase();
    return allAuthors.filter(( poet ) =>
    {
      function isIncludes(str: string): boolean {
        return str.toLowerCase().includes(lowerKeyWords);
      }

      const onCheck: string[] = [
        poet.name,
        poet.timeline[0].description,
      ];
      return onCheck.some(isIncludes);
    });
  }
}
