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
  NormeList: Array<{NormeId: number, designation: string}> = [
    {NormeId: 1, designation: "Nettoyer"},
    {NormeId: 2, designation: 'Ranger'},
    {NormeId: 3, designation: 'Etre rigoureux'},
    {NormeId: 4, designation: "Maintenir l'ordre"},
    {NormeId: 5, designation: "Débarrasser"},
];
formCum=this.fb.group({
  designation:[""],
  
  });
cumulative: Norme = {}
//NormeList: any = []
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
    normeId:this.cumulative.normeId,
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
  NormnormeId:string="";
  NormeName:string="";


  addDepartment(){
    var val = {NormnormeId:this.NormnormeId,
                NormeName:this.NormeName};
   /* this.normeService.postCumulative(val).subscribe(res=>{
      alert(res.toString());
    });*/
  //}

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      alert(item.normeId)
      this.normeService.deleteNorle(item.normeId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }
  ChangeData(){
    this.cumulative = {
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
  refreshDepList(){
    this.normeService.getListNormes().subscribe(data=>{
     // this.NormeList=data;
    });
  }
}
