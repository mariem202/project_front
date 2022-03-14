import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pole',
  templateUrl: './pole.component.html',
  styleUrls: ['./pole.component.css']
})
export class PoleComponent implements OnInit {

  constructor() { }
  ModalTitle:string="";
  ActivateAddEditEmpComp:boolean=false;
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
    this.ActivateAddEditEmpComp=true;

  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
  }

}
