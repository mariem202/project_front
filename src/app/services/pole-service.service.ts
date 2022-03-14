import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoleServiceService {
  readonly APIUrl="http://localhost:53535/api/Pole";
  constructor(private http:HttpClient) { }

  getPoleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GetAllPole');
  }
  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/PostPole',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/PutPole',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/DeletePole/'+val);
  }
}
