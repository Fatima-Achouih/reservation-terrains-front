import { TerrainSService } from './../../../service/terrain-s.service';
import { Terrain } from './../../../models/terrain';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss']
})
export class TerrainComponent implements OnInit {
 
  ter: Terrain = new Terrain();
  isApiLoaded = false;
  add: Address = new Address()
  id : number
  
  
  options: any = {
    componentRestrictions: { country: 'MA' }
  }

  autocomplete : any = null

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private terS: TerrainSService,

    private route: ActivatedRoute,
    

  ) { }

 


  
    
  ngOnInit() {
    this.loadScript().then(() =>{
      this.isApiLoaded = true
    })
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }

  loadScript() {
    return new Promise((resolve, reject) => {
      const element = this.document.createElement('script');
      element.type = 'text/javascript';
      element.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBToKH7XSnC4w88wACCXboAQhK0-kMGOAA&libraries=places';
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

  onSubmit(){
    console.log(Number((<HTMLInputElement>document.getElementById('cityLat')).value))
    this.ter.adresse= (<HTMLInputElement>document.getElementById('city2')).value;
    this.ter.lat=Number((<HTMLInputElement>document.getElementById('cityLat')).value);
    this.ter.lng=Number( (<HTMLInputElement>document.getElementById('cityLng')).value);
    console.log(this.ter)

    this.terS.createTerrain(this.ter).subscribe( data =>{
      console.log(data);
      //this.goToEmployeeList();
    });
  }

  
 
}
/*const input = this.document.getElementById('addr') as HTMLInputElement;
    console.log(input)
    var autocomplete = new google.maps.places.Autocomplete(input, this.options);
    var place = autocomplete.getPlace();
    console.log(place)
    var lat = place.geometry.location.lat();
    var lng = place.geometry.location.lat();
    console.log(lat, lng)*/