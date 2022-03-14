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
  emp:any;
  ngOnInit(): void {
    
  }
  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;

  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
  }

}
