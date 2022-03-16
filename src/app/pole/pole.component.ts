import { Component, OnInit } from '@angular/core';
import { PoleServiceService } from '../services/pole-service.service';

@Component({
  selector: 'app-pole',
  templateUrl: './pole.component.html',
  styleUrls: ['./pole.component.css']
})
export class PoleComponent implements OnInit {

  constructor() { }
 // constructor(private service:PoleServiceService) { }
  PoleList:any=[];
  ModalTitle:string="";
  ActivateAddEditPoleComp:boolean=false;
  pole:any;
  ngOnInit(): void {
    
  }
  addClick(){
    this.pole={
      poleId:0,
      poleName:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add pole";
    this.ActivateAddEditPoleComp=true;

  }
  closeClick(){
    this.ActivateAddEditPoleComp=false;
  }

  /*editClick(item){
    this.pole=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditPoleComp=true;
  }

  deleteClick(){
    if(confirm('Are you sure??')){
      this.service.deletePole(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshPoleList();
      })
    }
  }*/

  


  refreshPoleList(){
   /* this.service.getPoleList().subscribe(data=>{
      this.PoleList=data;
     // this.DepartmentListWithoutFilter=data;
    });*/
  }

}
