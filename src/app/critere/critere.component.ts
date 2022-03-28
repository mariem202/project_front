import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Critere } from '../critere';
import { CritereService } from '../services/critere.service';
import { NormeServiceService } from '../services/norme-service.service';

@Component({
  selector: 'app-critere',
  templateUrl: './critere.component.html',
  styleUrls: ['./critere.component.css']
})
export class CritereComponent implements OnInit {
   CritereList: Array<{ critereId: number, criterelabel: string, normes: string }> = [
     { critereId: 1, criterelabel: "Nettoyer", normes: "" },
     { critereId: 2, criterelabel: 'Ranger', normes: "" },
     { critereId: 3, criterelabel: 'Etre rigoureux', normes: "" },
     { critereId: 4, criterelabel: "Maintenir l'ordre", normes: "" },
     { critereId: 5, criterelabel: "Débarrasser", normes: "" },
   ];
 
  NormeList: Array<{ NormeId: number, designation: string }> = [
    { NormeId: 1, designation: "Nettoyer" },
    { NormeId: 2, designation: 'Ranger' },
    { NormeId: 3, designation: 'Etre rigoureux' },
    { NormeId: 4, designation: "Maintenir l'ordre" },
    { NormeId: 5, designation: "Débarrasser" },
  ];
  /*
  NormeList: any = []
  formCum = this.fb.group({
    designation: [""],
    norme: [],
  });
cumulative: Critere = {}
//NormeList: any = []
//filterForm: FormGroup
//formCum: FormGroup
constructor(private CritereService: CritereService,private fb: FormBuilder ) { }
//public norme: Norme = new Norme();
ngOnInit(): void {
 this.refreshcriList();
}



public saveData() {
  if(! this.formCum.valid){
    alert("veuillez remplir tous les champs")
  }
  this.cumulative = {
    critereId:this.cumulative.critereId,
    designation: this.formCum.controls['designation'].value,
    norme: this.formCum.controls['norme'].value,
  cumulative: Critere = {}
  CritereList: any = []
  //filterForm: FormGroup
  //formCum: FormGroup
  constructor(private CritereService: CritereService, private service: NormeServiceService, private fb: FormBuilder) { }
*/
  //public norme: Norme = new Norme();
  ngOnInit(): void {
   // this.refreshcriList()
    //this.refreshDepList();
  }

/*

  public saveData() {
    if (!this.formCum.valid) {
      alert("veuillez remplir tous les champs")

    }
    this.refreshDepList()
    this.cumulative = {
      critereId: this.cumulative.critereId,
      criterelabel: this.formCum.controls['designation'].value,
      normes: this.formCum.controls['norme'].value,
    }
    this.CritereService.postCritere(this.cumulative).subscribe(res => {
      alert(res.toString())
      this.cumulative = {}

    })

      ,
      console.log('hello');
    console.log(this.cumulative);
    alert(this.cumulative.normes);


  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      alert(item.normeId)
      this.CritereService.deleteCritere(item.normeId).subscribe(data => {
        alert(data.toString());
        this.refreshcriList();
      })
    }
  }
  ChangeData() {
    /* this.cumulative = {
       normeId:this.cumulative.normeId,
       designation: this.formCum.controls['designation'].value,
     }
     this.normeService.editNorme(this.cumulative).subscribe(res=>{
       alert(res.toString())
       this.cumulative={}
     })
   
   
     console.log('hello');
     console.log(this.cumulative);
     alert(this.cumulative.designation);
  }

  refreshcriList() {
    this.CritereService.getListCriteres().subscribe(data => {
      this.CritereList = data;
      console.log(this.CritereList)
    });


  }

  refreshDepList() {
    this.service.getListNormes().subscribe(data => {
      this.NormeList = data;
      console.log(this.NormeList.designation)
    });

  }
*/
}
