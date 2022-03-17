import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NormeServiceService {

  backEndUrl:string="http://localhost:53535/api/Norme";
  constructor(private http:HttpClient) { } 
  postNorme(cumulative:any){
    return this.http.post(this.backEndUrl+"/Post",cumulative,{responseType:"text"})
  }
}
