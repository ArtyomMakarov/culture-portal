import { Component } from '@angular/core';
import { CommonConstants } from '../../../constants/constants';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public languageArr: Array<string> = CommonConstants.LANGUAGE_ARR;
  public isFade: boolean = false;

  constructor(
    public translate: TranslateService,
    private router: Router) {
      window.onscroll = () => {
        if(!this.isFade && window.pageYOffset > 130) {
          this.isFade = true;
        }
        else if (this.isFade && window.pageYOffset < 130) {
          this.isFade = false;
        }
      }
    }

  public selectLanguage(val: string) {
    this.translate.use(val.toLowerCase());
  }

  public isActive(path: string): boolean {
    return this.router.url.includes(path);
  }
}
