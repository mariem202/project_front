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

  backEndUrl: string = "https://localhost:44388/api/Normes";
  constructor(private http: HttpClient) { }
  postNorme(cumulative: any) {
    return this.http.post(this.backEndUrl + "/PostNormes", cumulative, { responseType: "text" })
  }
  listNormes: Norme[] = []
  getListNormes() {
    return this.http.get(this.backEndUrl + "/GetAllNormes")
  }
  deleteNorle(cumulative: any) {
    return this.http.delete(this.backEndUrl + "/DeleteNormes?SaisieCommentId=" + cumulative, { responseType: "text" })
  }
  editNorme(cumulative: any) {
    return this.http.put(this.backEndUrl + "/edit", cumulative, { responseType: "text" })
  }
}
