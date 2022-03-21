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
 /* NormeList: Array<{id: number, designation: string}> = [
    {id: 1, designation: "Nettoyer"},
    {id: 2, designation: 'Ranger'},
    {id: 3, designation: 'Etre rigoureux'},
    {id: 4, designation: "Maintenir l'ordre"},
    {id: 5, designation: "Débarrasser"},
];*/
formCum=this.fb.group({
  designation:[""],
  
  });
cumulative: Norme = {}
NormeList: any = []
//filterForm: FormGroup
//formCum: FormGroup
constructor(private normeService: NormeServiceService,private fb: FormBuilder ) { }

//public norme: Norme = new Norme();
ngOnInit(): void {
   this.normeService.getListNormes().subscribe(data=>{
    //this.NormeList=data;
    //        this.refreshDepList();
  });
}



public saveData() {
  if(! this.formCum.valid){
    alert("veuillez remplir tous les champs")
  }
  this.cumulative = {
    id:this.cumulative.id,
    designation: this.formCum.controls['designation'].value,
  }
  this.normeService.postNorme(this.cumulative).subscribe(res=>{
    alert(res.toString())
    this.cumulative={}
  })


  console.log('hello');
  console.log(this.cumulative);
  alert(this.cumulative.designation);
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

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.normeService.deleteNorle(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }
  ChangeData(){
    this.cumulative = {
      id:this.cumulative.id,
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
  refreshDepList(){
    this.normeService.getListNormes().subscribe(data=>{
     // this.NormeList=data;
    });
  }
}
