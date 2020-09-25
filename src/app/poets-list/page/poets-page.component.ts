import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from '../../../animations/router-animations';

@Component({
  selector: 'app-poets-page',
  templateUrl: './poets-page.component.html',
  styleUrls: ['./poets-page.component.scss'],
  animations: [ slider ]
})
export class PoetsPageComponent {
  public prepareRoute(outlet: RouterOutlet): false | string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
