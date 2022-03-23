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
  CritereList: Array<{CritereId: number, CritereName: string,norme:string}> = [
    {CritereId: 1, CritereName: "Nettoyer",norme:""},
    {CritereId: 2, CritereName: 'Ranger',norme:""},
    {CritereId: 3, CritereName: 'Etre rigoureux',norme:""},
    {CritereId: 4, CritereName: "Maintenir l'ordre",norme:""},
    {CritereId: 5, CritereName: "Débarrasser",norme:""},
];

  NormeList: Array<{NormeId: number, designation: string}> = [
    {NormeId: 1, designation: "Nettoyer"},
    {NormeId: 2, designation: 'Ranger'},
    {NormeId: 3, designation: 'Etre rigoureux'},
    {NormeId: 4, designation: "Maintenir l'ordre"},
    {NormeId: 5, designation: "Débarrasser"},
];
formCum=this.fb.group({
  designation:[""],
  norme:[""],
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
  }
  this.CritereService.postCritere(this.cumulative).subscribe(res=>{
    alert(res.toString())
    this.cumulative={}
  })


  console.log('hello');
  console.log(this.cumulative);
  alert(this.cumulative.norme);


}

deleteClick(item: any){
  if(confirm('Are you sure??')){
    alert(item.normeId)
    this.CritereService.deleteCritere(item.normeId).subscribe(data=>{
      alert(data.toString());
      this.refreshcriList();
    })
  }
}
ChangeData(){
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
  alert(this.cumulative.designation);*/
}

refreshcriList(){
  this.CritereService.getListCriteres().subscribe(data=>{
   // this.CritereList=data;
  });
}





  








}
