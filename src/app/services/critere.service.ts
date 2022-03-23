import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Critere } from '../critere';

@Injectable({
  providedIn: 'root'
})
export class CritereService {

  backEndUrl:string="http://localhost:53535/api/Critere";
  constructor(private http:HttpClient) { } 
  postCritere(cumulative:any){
    return this.http.post(this.backEndUrl+"/Post",cumulative,{responseType:"text"})
  }

  getListCriteres(){
        return this.http.get(this.backEndUrl+"/GetAllCritere")
     } 
  deleteCritere(cumulative: any){
         return this.http.delete(this.backEndUrl+"/delelte"+cumulative,{responseType:"text"})
       }
  editCritere(cumulative:any){
           return this.http.put(this.backEndUrl+"/edit",cumulative,{responseType:"text"})
         }
}
