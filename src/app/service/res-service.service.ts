import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResServiceService {

  constructor(private http: HttpClient) { }

  getRes(): Observable<any> {  
    return this.http.get(`http://localhost:9097/res`); 
   }
}
