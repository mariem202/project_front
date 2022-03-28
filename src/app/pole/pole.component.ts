import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Pole } from '../pole';
import { PoleServiceService } from '../services/pole-service.service';

@Component({
  selector: 'app-pole',
  templateUrl: './pole.component.html',
  styleUrls: ['./pole.component.css']
})
export class PoleComponent implements OnInit {
  //constructor() { }
  constructor(private service: PoleServiceService, private fb: FormBuilder) { }

  // constructor(private service:PoleServiceService) { }
  /* PoleList:Array<{PoleId: number, Polename: string,image :string}> = [
     {PoleId: 1, Polename: "alimentation-animale",image:"assets/images/alimentation-animale.png"},
     {PoleId: 2, Polename: 'agroalimentaire',image:"assets/images/agrico.png"},
     {PoleId: 3, Polename: 'avicole',image:"assets/images/avicole.jpg"},
     {PoleId: 4, Polename: "industrielle",image:"assets/images/industrielle.png"},
 ];*/
  PoleList: any = []
  PhotoFileName: string = ""
  PhotoFilePath: string = 'assets/images/industrielle.png'
  formCum = this.fb.group({
    PoleName: [""],
    path: [""]
  });
  cumulative: Pole = {}

  ModalTitle: string = "Ajouter Pole ";

  ngOnInit(): void {

    this.refreshPoleList();
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      alert(item.poleId)
      this.service.deletePole(item.poleId).subscribe(data => {
        alert(data.toString());
        this.refreshPoleList()
      })
    }
  }
  public saveData() {
    if (!this.formCum.valid) {
      alert("veuillez remplir tous les champs")
    }
    this.cumulative = {
      PoleId:this.cumulative.PoleId,
      PoleName: this.formCum.controls['designation'].value,
      image:this.formCum.controls['path'].value
    }
    this.service.postPole(this.cumulative).subscribe(res => {
      alert(res.toString())
      this.cumulative = {}
    })


    console.log('hello');
    console.log(this.cumulative);
    alert(this.cumulative.PoleName);
  } 


  refreshPoleList() {
    this.service.getPoleList().subscribe(data => {
      this.PoleList = data;
      console.log(this.PoleList)
      // this.DepartmentListWithoutFilter=data;
    });
  }
  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);
    alert(file.name)
    this.PhotoFilePath = this.formCum.controls['path'].value;
    this.service.UploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.formCum.controls['path'].value;
    })
    console.log("photo")
    console.log(this.PhotoFilePath)
  }

}
