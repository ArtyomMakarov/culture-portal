import { Component } from '@angular/core';
import { CommonConstants } from '../../../constants/constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public languageArr: Array<string> = CommonConstants.LANGUAGE_ARR;

  constructor(public translate: TranslateService) {}

  public selectLanguage(val: string) {
    this.translate.use(val.toLowerCase());
  }
}
