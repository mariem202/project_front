import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Norme } from '../norme';

@Injectable({
  providedIn: 'root'
})
export class PoleServiceService {

 // readonly APIUrl="http://localhost:53535/api/Pole";
 listNorme:Norme[]=[]
 backEndUrl:string="http://localhost:53535/api/Pole";
  constructor(private http:HttpClient) { }
  postCumulative(cumulative:any){
    return this.http.post(this.backEndUrl+"/Post",cumulative,{responseType:"text"})
  }
 /* getPoleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GetAllPole');
  }
  addPole(val:any){
    return this.http.post(this.APIUrl+'/PostPole',val);
  }

  updatePole(val:any){
    return this.http.put(this.APIUrl+'/PutPole',val);
  }

  deletePole(val:any){
    return this.http.delete(this.APIUrl+'/DeletePole/'+val);
  }

  /*UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }*/

}
