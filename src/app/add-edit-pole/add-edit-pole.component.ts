import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-pole',
  templateUrl: './add-edit-pole.component.html',
  styleUrls: ['./add-edit-pole.component.css']
})
export class AddEditPoleComponent implements OnInit {

  constructor() { }
  dep:any;
  PoleId:string="";
  PoleName:string="";
  PhotoFileName:string="";
  PhotoFilePath:string="";
  ngOnInit(): void {
    this.PoleId=this.dep.DepartmentId;
    this.PoleName=this.dep.DepartmentName;
  }
  addPole(){
    var val = {DepartmentId:this.PoleId,
                DepartmentName:this.PoleName};
  /*  this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });*/
  }

  updatePole(){
    var val = {DepartmentId:this.PoleId,
      DepartmentName:this.PoleName};
    
  }
  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    /*this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })*/
  }
}
