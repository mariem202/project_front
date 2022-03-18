import { Component, OnInit } from '@angular/core';
import { Norme } from '../norme';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

import { FormControl, Validators } from '@angular/forms';
import { NormeServiceService } from '../services/norme-service.service';
@Component({
  selector: 'app-gestion-normes',
  templateUrl: './gestion-normes.component.html',
  styleUrls: ['./gestion-normes.component.css']
})
export class GestionNormesComponent implements OnInit {

 // constructor() { }
  /*NormeList: Array<{identifiant: number, libelle: string}> = [
    {identifiant: 1, libelle: "Nettoyer"},
    {identifiant: 2, libelle: 'Ranger'},
    {identifiant: 3, libelle: 'Etre rigoureux'},
    {identifiant: 4, libelle: "Maintenir l'ordre"},
    {identifiant: 5, libelle: "Débarrasser"},
];*/
formCum=this.fb.group({
  name:[""],
  
  });
cumulative: Norme = {}
NormeList: any = []
//filterForm: FormGroup
//formCum: FormGroup
constructor(private normeService: NormeServiceService,private fb: FormBuilder ) { }

//public norme: Norme = new Norme();
ngOnInit(): void {
   this.normeService.getListNormes().subscribe(data=>{
    this.NormeList=data;
  });
}



public saveData() {
  if(! this.formCum.valid){
    alert("veuillez remplir tous les champs")
  }
  this.cumulative = {
    id:this.cumulative.id,
    name: this.formCum.controls['name'].value,
  }
  this.normeService.postNorme(this.cumulative).subscribe(res=>{
    alert(res.valueOf.toString());
  })


  console.log('hello');
  alert(this.cumulative.name);
}



ModalTitle:string="ajouter un nouveau norme";
/*nor:any;
  NormId:string="";
  NormeName:string="";


  addDepartment(){
    var val = {NormId:this.NormId,
                NormeName:this.NormeName};
   /* this.normeService.postCumulative(val).subscribe(res=>{
      alert(res.toString());
    });*/
  //}


}
