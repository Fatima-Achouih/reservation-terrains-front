import { Terrain } from './../models/terrain';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerrainSService {

  constructor(private http: HttpClient) { }

  createTerrain(ter: Terrain): Observable<Object>{
    return this.http.post(`http://localhost:9097/terrain`, ter);
  }
  searchNearTerrain(ter: Terrain): Observable<Object>{
    return this.http.post(`http://localhost:9097/terrain`, ter);
  }
}
