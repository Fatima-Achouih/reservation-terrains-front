import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Terrain } from 'src/app/models/terrain';
import { TerrainSService } from 'src/app/service/terrain-s.service';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {
  ter: Terrain = new Terrain();

  isApiLoaded = false;
  options: any = {
    componentRestrictions: { country: 'MA' }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private terS: TerrainSService,
  ) { }

  ngOnInit() {
    this.loadScript().then(() =>{
      this.isApiLoaded = true
    })
  }

  loadScript() {
    return new Promise((resolve, reject) => {
      const element = this.document.createElement('script');
      element.type = 'text/javascript';
      element.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCSNW7Pt4PQZ7qxeT6rrTAQoBqpcw51KBE&libraries=places';
      element.onload = resolve;
      element.onerror = reject;
      this.elementRef.nativeElement.appendChild(element);
    })
  }

  handleAddressChange(address: Address) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng());
    (<HTMLInputElement>document.getElementById('city2')).value = address.formatted_address.replace(/^"(.*)"$/, '$1');
    (<HTMLInputElement>document.getElementById('cityLat')).value = address.geometry.location.lat().toString();
    (<HTMLInputElement>document.getElementById('cityLng')).value = address.geometry.location.lng().toString();
    console.log((<HTMLInputElement>document.getElementById('cityLat')).value)
  }

  onSearch(){
    console.log(Number((<HTMLInputElement>document.getElementById('cityLat')).value))
    this.ter.adresse= (<HTMLInputElement>document.getElementById('city2')).value;
    this.ter.lat=Number((<HTMLInputElement>document.getElementById('cityLat')).value);
    this.ter.lng=Number( (<HTMLInputElement>document.getElementById('cityLng')).value);
    console.log(this.ter)

    this.terS.searchNearTerrain(this.ter).subscribe( data =>{
      console.log(data);
      //this.goToEmployeeList();
    });

}}
