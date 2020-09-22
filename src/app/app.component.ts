import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slider } from '../animations/router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slider ]
})
export class AppComponent {
  title = 'culture-home';

  constructor(public translate: TranslateService) { }

  public prepareRoute(outlet: RouterOutlet): false | string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
