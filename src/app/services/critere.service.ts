import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Critere } from '../critere';

@Injectable({
  providedIn: 'root'
})
export class CritereService {

  backEndUrl: string = "https://localhost:44388/api/criteres";
  constructor(private http: HttpClient, private fb: FormBuilder) {

  }
  formCum = this.fb.group({
    critereId: ['00000000-0000-0000-000000000000'],
    criterelabel: [""],
    normes: [''],
  });
  postCritere(cumulative: any) {
    return this.http.post(this.backEndUrl + "/PostFilale", cumulative, { responseType: "text" })
  }

  getListCriteres() {
    return this.http.get(this.backEndUrl + "/GetAllcriters")
  }
  deleteCritere(cumulative: any) {
    return this.http.delete(this.backEndUrl + "/Deletecriteres?SaisieCommentId=" + cumulative, { responseType: "text" })
  }
  editCritere(cumulative: any) {
    return this.http.put(this.backEndUrl + "/edit", cumulative, { responseType: "text" })
  }
}
