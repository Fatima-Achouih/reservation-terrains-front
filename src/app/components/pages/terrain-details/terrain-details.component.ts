import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terrain-details',
  templateUrl: './terrain-details.component.html',
  styleUrls: ['./terrain-details.component.scss']
})
export class TerrainDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
  }

}
