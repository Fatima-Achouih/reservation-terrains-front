import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder';
import 'leaflet-search';



@Component({
  selector: 'app-map-test',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.scss'],

 

})
export class MapTestComponent implements AfterViewInit {
  @ViewChild('map', {static: false}) mapContainer: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {
    const map = L.map(this.mapContainer.nativeElement).setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
  }).addTo(map);

  const geocoder = L.Control.geocoder({
      placeholder: 'Search for location...',
      errorMessage: 'Nothing found.',
      showResultIcons: true,
      collapseAfterResult: true,

      expand: 'touch' //  'touch'|'click'|false
  }).addTo(map);

  
  }
  

 

}
