import { Component, OnInit } from '@angular/core';
import { PoleServiceService } from '../services/pole-service.service';

@Component({
  selector: 'app-add-edit-pole',
  templateUrl: './add-edit-pole.component.html',
  styleUrls: ['./add-edit-pole.component.css']
})
export class AddEditPoleComponent implements OnInit {

  constructor() { }
  // constructor(public service:PoleServiceService) { }
  pole:any;
  PoleId:string="";
  PoleName:string="";
  PhotoFileName:string="";
  PhotoFilePath:string="";

  ngOnInit(): void {
    this.PoleId=this.pole.PoleId;
    this.PoleName=this.pole.PoleName;
  }
  addPole(){
    var val = {PoleId:this.PoleId,
                PoleName:this.PoleName};
    // this.service.addPole(val).subscribe(res=>{
    //   alert(res.toString());
    // });
  }

  updatePole(){
    var val = {DepartmentId:this.PoleId,
      DepartmentName:this.PoleName};
      /*this.service.updatePole(val).subscribe(res=>{
        alert(res.toString());
        });*/
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
