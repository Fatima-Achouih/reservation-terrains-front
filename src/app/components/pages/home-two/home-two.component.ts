import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {

  isApiLoaded = false;
  options: any = {
    componentRestrictions: { country: 'MA' }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef
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
    console.log(address.geometry.location.lng())
  }

}
