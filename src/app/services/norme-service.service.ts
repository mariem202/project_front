import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Norme } from '../norme';
import { Pole } from '../pole';
import { PoleComponent } from '../pole/pole.component';

@Injectable({
  providedIn: 'root'
})
export class NormeServiceService {

  backEndUrl:string="http://localhost:53535/api/Norme";
  constructor(private http:HttpClient) { } 
  postNorme(cumulative:any){
    return this.http.post(this.backEndUrl+"/Post",cumulative,{responseType:"text"})
  }
  listNormes:Norme[]=[]
  getListNormes(){
        return this.http.get(this.backEndUrl+"/GetAllNormes")
     }
}
