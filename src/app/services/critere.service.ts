import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Critere } from '../critere';

@Injectable({
  providedIn: 'root'
})
export class CritereService {

  backEndUrl: string = "https://localhost:44388/api/criteres";
  constructor(private http: HttpClient) { }
  postCritere(cumulative: any) {
    return this.http.post(this.backEndUrl + "/PostFilale", cumulative, { responseType: "text" })
  }

  getListCriteres() {
    return this.http.get(this.backEndUrl + "/GetAllcriters")
  }
  deleteCritere(cumulative: any) {
    return this.http.delete(this.backEndUrl + "/delelte" + cumulative, { responseType: "text" })
  }
  editCritere(cumulative: any) {
    return this.http.put(this.backEndUrl + "/edit", cumulative, { responseType: "text" })
  }
}
