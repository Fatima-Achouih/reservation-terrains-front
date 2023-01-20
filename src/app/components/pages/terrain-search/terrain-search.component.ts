import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Terrain } from 'src/app/models/terrain';
import { TerrainSService } from 'src/app/service/terrain-s.service';

@Component({
  selector: 'app-terrain-search',
  templateUrl: './terrain-search.component.html',
  styleUrls: ['./terrain-search.component.scss']
})
export class TerrainSearchComponent implements OnInit {
 
  ter: Terrain = new Terrain();
  ters: any;
  constructor(private terS:TerrainSService, private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    /*this.terS.getterrains().subscribe(data =>{  
      this.ters =data;  
   
      }) */
      this.ter.adresse=this.route.snapshot.params['adresse']
      this.ter.lat=this.route.snapshot.params['lat']
      this.ter.lng=this.route.snapshot.params['lng']
      console.log(this.route.snapshot.params['lat'],this.route.snapshot.params['lng'],this.route.snapshot.params['adresse'])

      this.terS.searchNearTerrain(this.ter).subscribe( data =>{
        this.ters =data;
        
        //this.goToEmployeeList();
        
      });
  }

  terrainDetails(id: number){

    this.router.navigate(['terrain', id]);
  }
}
