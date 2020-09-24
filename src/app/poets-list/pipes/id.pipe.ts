import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoId',
})
export class VideoIdPipe implements PipeTransform {
  public transform(value: string): string {
    return value.slice(value.indexOf('=') + 1);
  }
}
