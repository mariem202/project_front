import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Critere } from '../critere';
import { Norme } from '../norme';
import { CritereService } from '../services/critere.service';
import { NormeServiceService } from '../services/norme-service.service';

@Component({
  selector: 'app-critere',
  templateUrl: './critere.component.html',
  styleUrls: ['./critere.component.css']
})
export class CritereComponent implements OnInit {
  /* CritereList: Array<{critereId: string, criterelabel: string}> = [
     {critereId: "", criterelabel: "Nettoyer"},
     {critereId: "", criterelabel: 'Ranger'},
     {critereId: "", criterelabel: 'Etre rigoureux'},
     {critereId: "", criterelabel: "Maintenir l'ordre"},
     {critereId: "", criterelabel: "Débarrasser"},
 ];*/

  /* NormeList: Array<{NormeId: number, designation: string}> = [
     {NormeId: 1, designation: "Nettoyer"},
     {NormeId: 2, designation: 'Ranger'},
     {NormeId: 3, designation: 'Etre rigoureux'},
     {NormeId: 4, designation: "Maintenir l'ordre"},
     {NormeId: 5, designation: "Débarrasser"},
 ];*/


  CritereList: any = []
  NormeList: any = []
  cumulative: Critere = {}
  //NormeList: any = []
  //filterForm: FormGroup
  //formCum: FormGroup
  constructor(public CritereService: CritereService, private fb: FormBuilder, private service: NormeServiceService,) { }
  //public norme: Norme = new Norme();
  ngOnInit(): void {
    this.refreshcriList();
    this.refreshnormList();
  }



  public saveData() {
    if (!this.CritereService.formCum.valid) {
      alert("veuillez remplir tous les champs")
    }
    this.cumulative = {
      critereId: this.cumulative.critereId,
      criterelabel: this.CritereService.formCum.controls['criterelabel'].value,
      normes: this.CritereService.formCum.controls['normes'].value,
    }
    this.CritereService.postCritere(this.cumulative).subscribe(res => {
      alert(res.toString())
      //this.cumulative={}
    })


    console.log('hello');
    // console.log(this.CritereService.formCum.value);
    alert(this.cumulative.normes); alert(this.cumulative.criterelabel);


  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      alert(item.critereId)
      this.CritereService.deleteCritere(item.critereId).subscribe(data => {
        alert(data.toString());
        this.refreshcriList();
      })
    }
  }
  ChangeData(norme: Critere) {
    this.CritereService.formCum.reset({
      critereId: norme.critereId,
      criterelabel: norme.criterelabel,
      normes: norme.normes
    })
  }

  refreshcriList() {
    this.CritereService.getListCriteres().subscribe(data => {
      this.CritereList = data;
    });
  }


  refreshnormList() {
    this.service.getListNormes().subscribe(data => {
      this.NormeList = data;
      console.log(this.NormeList.designation)
    });

  }

}
