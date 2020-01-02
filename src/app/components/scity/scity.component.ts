import { Component, OnInit, ViewChild } from '@angular/core';
import { ScityService } from 'src/app/services/scity.service';
import { Scity } from 'src/app/models/scity.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-scity',
  templateUrl: './scity.component.html',
  styleUrls: ['./scity.component.css']
})
export class ScityComponent implements OnInit {

  public data$: Scity[];
  closeResult: string;
  scity: Scity = new Scity();
  submitted = false;
  

  constructor(private service:ScityService) { }

  ngOnInit() {
    this.getAll();
  
  }

  public getAll() {
    return this.service.get()
   .subscribe(data=>this.data$=data);
  }

  public delete(id: number) {
      this.service.delete(id)
        .subscribe(data => {
        console.log(data);
        this.getAll();
        },
          error => console.log(error));
        
  }  

  public refresh(): void {
      window.location.reload();
  }  
 
  //INSERT
  newValue(): void {
    this.submitted = false;
    this.scity = new Scity();
  }

  save() {
    this.service.create(this.scity)//************************************* 
      .subscribe(data => console.log(data), error => console.log(error));
    this.scity = new Scity();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  //  this.refresh();
    this.service.refreshList();
  }


}
