import { Terrain } from './../../../models/terrain';
import { TerrainSService } from 'src/app/service/terrain-s.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-terrains',
  templateUrl: './list-terrains.component.html',
  styleUrls: ['./list-terrains.component.scss']
})
export class ListTerrainsComponent implements OnInit {

  constructor(private terS:TerrainSService) { }
  ters: Terrain[];

  ngOnInit(): void {
    this.terS.getterrains().subscribe(data =>{  
      this.ters =data;  
   
      }) 
  }

}
