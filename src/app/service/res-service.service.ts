import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Res } from '../models/res';

@Injectable({
  providedIn: 'root'
})
export class ResServiceService {

  constructor(private http: HttpClient) { }

  getRes(): Observable<any> {  
    return this.http.get(`http://localhost:9097/res`); 
   }

   createRes(reserv:Res): Observable<Object>{
    return this.http.post(`http://localhost:9097/res`, reserv);

    
  }

  getResT(id:string): Observable<any> {  
    return this.http.get(`http://localhost:9097/res/${id}`);  
  } 
}
