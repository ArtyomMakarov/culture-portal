import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [
    `
      mgl-map {
        height: 400px;
        width: 100%;
      }
    `,
  ],
})
export class MapComponent implements OnInit {

  @Input() lng: number;
  @Input() lat: number;

  public coords: number[];

  ngOnInit() {
    this.coords = [this.lng, this.lat];
  }

}
