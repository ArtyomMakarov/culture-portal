import { Injectable } from '@angular/core';
import { IAuthor } from '../models/authors-model';
import { poets } from '../../../poets-data/poets'

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private poets: IAuthor[] = poets;

  getAllPoets(): IAuthor[] {
    return this.poets;
  }
}
